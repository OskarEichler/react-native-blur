import type { CodegenTypes, ViewProps } from 'react-native';
export type GlassType = 'clear' | 'regular';
export interface NativeProps extends ViewProps {
    glassType?: CodegenTypes.WithDefault<GlassType, 'clear'>;
    glassTintColor?: CodegenTypes.WithDefault<string, 'clear'>;
    glassOpacity?: CodegenTypes.WithDefault<CodegenTypes.Double, 1.0>;
    reducedTransparencyFallbackColor?: CodegenTypes.WithDefault<string, '#FFFFFF'>;
    isInteractive?: CodegenTypes.WithDefault<boolean, true>;
    ignoreSafeArea?: CodegenTypes.WithDefault<boolean, true>;
}
declare const _default: import("react-native").HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ReactNativeLiquidGlassViewNativeComponent.d.ts.map