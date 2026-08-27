import type { CodegenTypes, HostComponent, ViewProps } from 'react-native';
import type React from 'react';
export interface ValueChangeEvent {
    value: boolean;
}
interface NativeProps extends ViewProps {
    value?: CodegenTypes.WithDefault<boolean, false>;
    blurAmount?: CodegenTypes.WithDefault<CodegenTypes.Double, 10.0>;
    blurRounds?: CodegenTypes.WithDefault<CodegenTypes.Int32, 5>;
    thumbColor?: CodegenTypes.WithDefault<string, '#FFFFFF'>;
    trackColorOff?: CodegenTypes.WithDefault<string, '#E5E5EA'>;
    trackColorOn?: CodegenTypes.WithDefault<string, '#34C759'>;
    disabled?: CodegenTypes.WithDefault<boolean, false>;
    onValueChange?: CodegenTypes.DirectEventHandler<Readonly<ValueChangeEvent>>;
}
interface NativeCommands {
    setNativeValue: (viewRef: React.ElementRef<HostComponent<NativeProps>>, value: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=ReactNativeBlurSwitchNativeComponent.d.ts.map