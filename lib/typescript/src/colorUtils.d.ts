/** Blur strength used for the non-iOS-26 glass fallback. */
export declare const FALLBACK_BLUR_AMOUNT = 70;
/**
 * Upper bound on the tint alpha for the fallback. Liquid glass reads as a
 * subtle tint over blurred content, so a fully opaque tint would look like a
 * solid coloured panel. glassOpacity is scaled into [0, this].
 */
export declare const MAX_FALLBACK_TINT_ALPHA = 0.35;
/**
 * Builds the overlay colour for the fallback blur. Returns undefined (no tint)
 * for a clear/transparent/missing tint, and scales a hex tint down to a subtle,
 * capped alpha so the fallback approximates glass rather than a solid fill.
 * Non-hex colours (named colours, rgb/rgba) are passed through unchanged.
 */
export declare function getFallbackOverlayColor(tint: string | undefined, opacity: number): string | undefined;
//# sourceMappingURL=colorUtils.d.ts.map