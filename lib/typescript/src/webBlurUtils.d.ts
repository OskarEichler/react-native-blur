import type { ViewStyle } from 'react-native';
import type { BlurType } from './ReactNativeBlurViewNativeComponent';
import type { ProgressiveBlurDirection } from './ReactNativeProgressiveBlurViewNativeComponent';
/**
 * ViewStyle extended with the web-only CSS properties the web implementations
 * rely on. react-native-web passes unknown style properties through to the DOM,
 * but RN's ViewStyle type does not declare them. Dynamic (inline) styles are
 * NOT auto-prefixed by react-native-web, so the Webkit twins must always be set
 * alongside the unprefixed properties.
 */
export type WebBlurStyle = ViewStyle & {
    backdropFilter?: string;
    WebkitBackdropFilter?: string;
    maskImage?: string;
    WebkitMaskImage?: string;
    backgroundImage?: string;
};
/**
 * Scale from the 0-100 `blurAmount` prop to a CSS blur radius in px.
 * 100 → 40px, calibrated side-by-side against the iOS simulator so common
 * amounts (40-70) diffuse the backdrop like UIVisualEffectView does.
 */
export declare const WEB_BLUR_RADIUS_SCALE = 0.4;
/** Number of stacked backdrop-filter layers used for the progressive ramp. */
export declare const PROGRESSIVE_LAYER_COUNT = 5;
/**
 * Stacked sibling backdrop-filters compound roughly as the root-sum-of-squares
 * of their radii (each later layer re-blurs the earlier layers' output). With
 * radii halving per layer the compound peak lands at ~1.15x the largest radius,
 * so radii are scaled down by ~0.87 to make the peak match `blurAmount`.
 */
export declare const PROGRESSIVE_RADIUS_COMPENSATION = 0.87;
/**
 * Maps native blur types to semi-transparent CSS background colours that
 * approximate the tint each type produces on iOS: light variants use
 * white-based overlays, dark variants black-based ones, and the system
 * materials follow the iOS ultra-thin → chrome opacity hierarchy.
 */
export declare const BLUR_TYPE_TO_BACKGROUND: Record<BlurType, string>;
/**
 * Feature-detects CSS backdrop-filter. Safe to call during server-side /
 * static rendering (Expo `web.output: "static"` renders in Node, where the
 * CSS API is absent) — it simply reports false there, leaving the tint-only
 * fallback styles. Memoized once the CSS API is available.
 */
export declare function supportsBackdropFilter(): boolean;
/** Keep server/hydration markup identical without delaying client-only mounts. */
export declare function useBackdropFilterSupport(): boolean;
/**
 * Builds the style for a uniform blur layer: the blurType tint as background
 * plus, when supported, a backdrop blur scaled from the 0-100 `blurAmount`.
 * Without backdrop-filter support the tint alone remains (graceful
 * degradation, same strategy as expo-blur).
 */
export declare function getBlurLayerStyle(blurType: BlurType, blurAmount: number, hasBackdropFilter?: boolean): WebBlurStyle;
/** One layer of the stacked progressive blur. */
export interface ProgressiveLayer {
    /** Backdrop blur radius in px. */
    radius: number;
    /** CSS mask limiting where this layer's blur is visible. */
    maskImage: string;
}
/**
 * Computes the stacked layers for a progressive blur: every layer covers the
 * fully-blurred plateau and fades out one gradient band further than the next
 * stronger one, halving the radius per band. Stacked, they produce a smooth
 * blur ramp from `blurAmount` px at the blurred edge down to 0 at the clear
 * edge — a true radius ramp rather than a single blur fading in opacity.
 *
 * `blurAmount` is the maximum radius in px (matching the native components,
 * where it is a pixel radius, unlike BlurView's 0-100 scale).
 */
export declare function getProgressiveLayers(direction: ProgressiveBlurDirection, startOffset: number, blurAmount: number): ProgressiveLayer[];
/**
 * Gradient for the tint layer of a progressive blur: the blurType tint at full
 * strength over the blurred plateau, fading to transparent at the clear edge,
 * following the same direction as the blur ramp.
 */
export declare function getProgressiveTintGradient(direction: ProgressiveBlurDirection, startOffset: number, tint: string): string;
//# sourceMappingURL=webBlurUtils.d.ts.map