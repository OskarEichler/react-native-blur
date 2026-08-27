import type { CodegenTypes, ViewProps } from 'react-native';
export type BlurType = 'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent' | 'systemUltraThinMaterial' | 'systemThinMaterial' | 'systemMaterial' | 'systemThickMaterial' | 'systemChromeMaterial' | 'systemUltraThinMaterialLight' | 'systemThinMaterialLight' | 'systemMaterialLight' | 'systemThickMaterialLight' | 'systemChromeMaterialLight' | 'systemUltraThinMaterialDark' | 'systemThinMaterialDark' | 'systemMaterialDark' | 'systemThickMaterialDark' | 'systemChromeMaterialDark';
export interface NativeProps extends ViewProps {
    blurAmount?: CodegenTypes.WithDefault<CodegenTypes.Double, 10.0>;
    blurType?: CodegenTypes.WithDefault<BlurType, 'xlight'>;
}
declare const _default: import("react-native").HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ReactNativeVibrancyViewNativeComponent.d.ts.map