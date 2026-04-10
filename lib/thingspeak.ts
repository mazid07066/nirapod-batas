export type FeedData = {
  created_at: string;
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
  field6?: string;
  field7?: string;
};

type ThingSpeakResponse = {
  feeds?: FeedData[];
};

const channelId = "1579754";

export async function getLatestData(): Promise<FeedData | null> {
  try {
    const res = await fetch(
      `https://api.thingspeak.com/channels/${channelId}/feeds.json?results=1`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("ThingSpeak latest data fetch failed");
    }

    const json: ThingSpeakResponse = await res.json();

    if (!json.feeds || json.feeds.length === 0) {
      return null;
    }

    return json.feeds[0];
  } catch (error) {
    console.error("Fetch latest error:", error);
    return null;
  }
}

export async function getRecentFeeds(results: number = 8): Promise<FeedData[]> {
  try {
    const res = await fetch(
      `https://api.thingspeak.com/channels/${channelId}/feeds.json?results=${results}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("ThingSpeak recent feeds fetch failed");
    }

    const json: ThingSpeakResponse = await res.json();

    if (!json.feeds || json.feeds.length === 0) {
      return [];
    }

    return json.feeds;
  } catch (error) {
    console.error("Fetch recent feeds error:", error);
    return [];
  }
}