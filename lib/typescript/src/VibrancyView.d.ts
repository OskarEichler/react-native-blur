import React from 'react';
import type { ViewStyle, StyleProp, ViewProps } from 'react-native';
import ReactNativeVibrancyView, { type BlurType } from './ReactNativeVibrancyViewNativeComponent';
export interface VibrancyViewProps extends ViewProps {
    /**
     * @description The type of blur effect to apply
     *
     * @default 'xlight'
     */
    blurType?: BlurType;
    /**
     * @description The intensity of the blur effect (0-100)
     *
     * @default 10
     */
    blurAmount?: number;
    /**
     * @description style object for the vibrancy view
     *
     * @default undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @description Child components to render inside the vibrancy view
     *
     * @default undefined
     */
    children?: React.ReactNode;
}
/**
 * A component that applies a vibrancy effect to its content.
 *
 * On iOS, this uses UIVibrancyEffect.
 * On Android, this falls back to a simple View (or BlurView behavior if implemented).
 */
/**
 * Ref to the underlying native vibrancy view. On Android (which falls back to
 * BlurView) the ref is not attached.
 */
export type VibrancyViewRef = React.ComponentRef<typeof ReactNativeVibrancyView>;
export declare const VibrancyView: React.NamedExoticComponent<VibrancyViewProps & React.RefAttributes<React.Component<import("./ReactNativeVibrancyViewNativeComponent").NativeProps, {}, any> & import("react-native").ReactNativeElement>>;
export default VibrancyView;
//# sourceMappingURL=VibrancyView.d.ts.map