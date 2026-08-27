import React from 'react';
import { View } from 'react-native';
import type { LiquidGlassViewProps } from './LiquidGlassView';
import { getFallbackOverlayColor } from './colorUtils';
export type { LiquidGlassViewProps } from './LiquidGlassView';
export { getFallbackOverlayColor };
/** Ref to the root view of the web liquid glass view. */
export type LiquidGlassViewRef = React.ComponentRef<typeof View>;
export declare const LiquidGlassView: React.NamedExoticComponent<LiquidGlassViewProps & React.RefAttributes<View>>;
export default LiquidGlassView;
//# sourceMappingURL=LiquidGlassView.web.d.ts.map