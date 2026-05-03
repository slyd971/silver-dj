import type { Metadata } from "next";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Footer } from "@/components/press-kit/Footer";
import { Header } from "@/components/press-kit/Header";
import { VideoSection } from "@/components/press-kit/VideoSection";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getResolvedNavigation,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata } from "@/lib/seo";

type VideosPageProps = {
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    font?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: VideosPageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );

  return buildClientMetadata(client, "/videos", {
    title: `${client.name} Vidéos | Performances live et extraits`,
    description: client.pressKit.videos.description,
    image: client.heroImage,
    keywords: [
      `${client.name} vidéos`,
      `${client.name} live`,
      "performances DJ",
      "extraits live",
      `DJ ${client.city}`,
    ],
    imageAlt: `Performances live de ${client.name}`,
  });
}

export default async function VideosPage({ searchParams }: VideosPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );
  const pressKitEntry = createPressKitEntry(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const showLocalSwitchers = await isLocalRequest();
  const navigation = getResolvedNavigation(pressKitConfig);
  const homeHref = getArtistHomeHref(pressKitEntry.id);
  const galleryHref = getArtistGalleryHref(pressKitEntry.id);
  const videosHref = getArtistVideosHref(pressKitEntry.id);

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="bg-[var(--pk-bg)] text-[var(--pk-text)]"
    >
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
      />
      {showLocalSwitchers && (
        <DevControlPanel
          activeClientId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeFontPresetId={fontPreset.id}
        />
      )}
      <div className="pt-16 md:pt-20">
        <VideoSection videos={pressKitConfig.videos} />
      </div>
      <Footer
        client={client}
        navigation={navigation}
        homeHref={homeHref}
        galleryHref={galleryHref}
        videosHref={videosHref}
      />
    </main>
  );
}
