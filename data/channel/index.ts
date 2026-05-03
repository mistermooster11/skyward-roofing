import type { ChannelPageData } from "@/components/custom/channel/types";
import skywardRoofing from "./skyward-roofing";

const channelDataMap: Record<string, ChannelPageData> = {
  "skyward-roofing": skywardRoofing,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
