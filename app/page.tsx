import Footer from "@/components/Footer";
import HeaderHero from "@/components/HeaderHero";
import InfoCard from "@/components/InfoCard";
import LegendBox from "@/components/LegendBox";
import MethodologySection from "@/components/MethodologySection";
import RecentHistoryTable from "@/components/RecentHistoryTable";
import SensorCard from "@/components/SensorCard";
import StatusBox from "@/components/StatusBox";
import TrendChart from "@/components/TrendChart";
import UseCaseSection from "@/components/UseCaseSection";
import WarningBox from "@/components/WarningBox";
import ZoneCard from "@/components/ZoneCard";
import { getAirStatus, getDataAgeInfo } from "@/lib/air-quality";
import {
  formatBanglaDateManual,
  formatBanglaShortTime,
  formatSensorValue,
  getBanglaNodeStatus,
  toBanglaDigits,
} from "@/lib/format";
import { sensorMeta } from "@/lib/sensor-meta";
import { getLatestData, getRecentFeeds } from "@/lib/thingspeak";
import { zones } from "@/lib/zones";

export default async function Home() {
  const [data, recentFeeds] = await Promise.all([
    getLatestData(),
    getRecentFeeds(8),
  ]);

  if (!data) {
    return (
      <main className="min-h-screen px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <HeaderHero />

          <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <p className="text-2xl font-bold text-red-600">ডেটা পাওয়া যায়নি</p>
              <p className="mt-3 text-slate-700">
                অনুগ্রহ করে ThingSpeak Channel ID, internet connection, অথবা field mapping পরীক্ষা করুন।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-800">
                শিল্প এলাকার পর্যবেক্ষণ জোন
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
                {zones.map((zone) => (
                  <ZoneCard
                    key={zone.id}
                    name={zone.name}
                    description={zone.description}
                    statusText={zone.statusText}
                    cardClass={zone.cardClass}
                    isLive={zone.isLive}
                  />
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    );
  }

  const temperature = Number(data.field1 || 0);
  const humidity = Number(data.field2 || 0);
  const mq2 = Number(data.field3 || 0);
  const mq9 = Number(data.field4 || 0);
  const mq135 = Number(data.field5 || 0);
  const dust = Number(data.field6 || 0);
  const nodeStatus = getBanglaNodeStatus(data.field7 || "Unknown");

  const status = getAirStatus(mq2, dust);
  const dataAge = getDataAgeInfo(data.created_at);

  const temperatureTrend = recentFeeds.map((feed) => ({
    label: formatBanglaShortTime(feed.created_at),
    value: Number(feed.field1 || 0),
  }));

  const humidityTrend = recentFeeds.map((feed) => ({
    label: formatBanglaShortTime(feed.created_at),
    value: Number(feed.field2 || 0),
  }));

  const mq2Trend = recentFeeds.map((feed) => ({
    label: formatBanglaShortTime(feed.created_at),
    value: Number(feed.field3 || 0),
  }));

  const dustTrend = recentFeeds.map((feed) => ({
    label: formatBanglaShortTime(feed.created_at),
    value: Number(feed.field6 || 0),
  }));

  const recentHistoryRows = [...recentFeeds].reverse().map((feed) => ({
    time: formatBanglaShortTime(feed.created_at),
    temperature: `${formatSensorValue(Number(feed.field1 || 0))} °C`,
    humidity: `${formatSensorValue(Number(feed.field2 || 0))} %`,
    mq2: `${formatSensorValue(Number(feed.field3 || 0))} ppm`,
    dust: `${formatSensorValue(Number(feed.field6 || 0))} µg/m³`,
  }));

  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <HeaderHero />

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg md:p-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-7 text-slate-700">
              এই ড্যাশবোর্ডটি ThingSpeak থেকে সর্বশেষ আপডেট হওয়া ডেটা প্রদর্শন করে।
              নতুন সেন্সর ডেটা এলে এই পেইজ পুনরায় লোড বা রিফ্রেশ করলে সর্বশেষ মান দেখা যাবে।
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-slate-800">
              শিল্প এলাকার পর্যবেক্ষণ জোন
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {zones.map((zone) => (
                <ZoneCard
                  key={zone.id}
                  name={zone.name}
                  description={zone.description}
                  statusText={zone.statusText}
                  cardClass={zone.cardClass}
                  isLive={zone.isLive}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-sky-200 bg-sky-50 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  কাটিং জোনের লাইভ ডেটা
                </h2>
                <p className="mt-2 text-slate-700">
                  বর্তমান সেন্সর নোড থেকে প্রাপ্ত রিয়েল-টাইম পরিবেশগত তথ্য
                </p>
              </div>

              <div className="rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">
                সক্রিয় লাইভ নোড
              </div>
            </div>

            <StatusBox
              label={status.label}
              color={status.color}
              bg={status.bg}
              border={status.border}
            />

            {dataAge.isStale ? (
              <WarningBox
                title="ডেটা আপডেট সতর্কতা"
                message={`এই ডেটা সর্বশেষ ${toBanglaDigits(
                  Math.floor(dataAge.minutesOld).toString()
                )} মিনিট আগে আপডেট হয়েছে। সেন্সর ডিভাইস বর্তমানে অফলাইন বা আপডেট বন্ধ থাকতে পারে।`}
              />
            ) : null}

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <InfoCard
                title="সর্বশেষ আপডেট"
                value={formatBanglaDateManual(data.created_at)}
              />
              <InfoCard title="সেন্সর নোড অবস্থা" value={nodeStatus} />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <SensorCard
                title={sensorMeta.field1.title}
                value={formatSensorValue(temperature)}
                unit={sensorMeta.field1.unit}
                cardClass={sensorMeta.field1.cardClass}
              />
              <SensorCard
                title={sensorMeta.field2.title}
                value={formatSensorValue(humidity)}
                unit={sensorMeta.field2.unit}
                cardClass={sensorMeta.field2.cardClass}
              />
              <SensorCard
                title={sensorMeta.field3.title}
                value={formatSensorValue(mq2)}
                unit={sensorMeta.field3.unit}
                cardClass={sensorMeta.field3.cardClass}
              />
              <SensorCard
                title={sensorMeta.field4.title}
                value={formatSensorValue(mq9)}
                unit={sensorMeta.field4.unit}
                cardClass={sensorMeta.field4.cardClass}
              />
              <SensorCard
                title={sensorMeta.field5.title}
                value={formatSensorValue(mq135)}
                unit={sensorMeta.field5.unit}
                cardClass={sensorMeta.field5.cardClass}
              />
              <SensorCard
                title={sensorMeta.field6.title}
                value={formatSensorValue(dust)}
                unit={sensorMeta.field6.unit}
                cardClass={sensorMeta.field6.cardClass}
              />
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-800">
                সাম্প্রতিক প্রবণতা বিশ্লেষণ
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                <TrendChart
                  title="তাপমাত্রার প্রবণতা"
                  unit="°C"
                  points={temperatureTrend}
                />
                <TrendChart
                  title="আর্দ্রতার প্রবণতা"
                  unit="%"
                  points={humidityTrend}
                />
                <TrendChart
                  title="MQ2 প্রবণতা"
                  unit="ppm"
                  points={mq2Trend}
                />
                <TrendChart
                  title="ধূলিকণার প্রবণতা"
                  unit="µg/m³"
                  points={dustTrend}
                />
              </div>
            </div>

            <div className="mt-10">
              <RecentHistoryTable rows={recentHistoryRows} />
            </div>
          </div>

          <div className="mt-10">
            <LegendBox />
          </div>

          <div className="mt-10">
            <MethodologySection />
          </div>

          <div className="mt-10">
            <UseCaseSection />
          </div>

          <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 p-6">
            <h2 className="text-2xl font-bold text-slate-800">শিল্প বিশ্লেষণ</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              এই সিস্টেমটি গার্মেন্টস কারখানার কাটিং, সেলাই, ফিনিশিং অথবা বয়লার
              জোনে বায়ুর গুণমান পর্যবেক্ষণে সহায়তা করতে পারে। এটি ধূলিকণা,
              ক্ষতিকর গ্যাস এবং অপর্যাপ্ত বায়ু চলাচলের সম্ভাব্য ঝুঁকি আগেভাগে
              চিহ্নিত করতে সাহায্য করে। বর্তমানে একটি লাইভ নোড ব্যবহার করা হলেও
              ভবিষ্যতে একাধিক নোড সংযুক্ত করে পূর্ণাঙ্গ জোনভিত্তিক শিল্প পর্যবেক্ষণ
              প্ল্যাটফর্মে রূপান্তর করা যাবে।
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}