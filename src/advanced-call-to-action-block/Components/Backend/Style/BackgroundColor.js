import { __ } from '@wordpress/i18n';
import { SelectControl, RangeControl } from '@wordpress/components';
import ColorControl from './ColorControl';

const BackgroundColor = ({ attributes, setAttributes }) => {
    const { bgType, bgColor, bgGradient1, bgGradient2, bgGradientAngle } = attributes;

    const updateBgType = (newType) => {
        setAttributes({ bgType: newType });
    };

    return (
        <>
            <SelectControl
                label={__('Background Type', 'hazrath-advanced-cta-block')}
                value={bgType}
                options={[
                    { label: __('Solid Color', 'hazrath-advanced-cta-block'), value: 'color' },
                    { label: __('Gradient', 'hazrath-advanced-cta-block'), value: 'gradient' },
                ]}
                onChange={updateBgType}
            />

            {bgType === 'color' && (
                <>
                    <strong>{__('Background Color', 'hazrath-advanced-cta-block')}</strong>
                    <ColorControl
                        label={__('Choose Color', 'hazrath-advanced-cta-block')}
                        value={bgColor}
                        onChange={(color) => setAttributes({ bgColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                </>
            )}

            {bgType === 'gradient' && (
                <>
                    <strong>{__('Choose Gradient Background', 'hazrath-advanced-cta-block')}</strong>
                    <ColorControl
                        label={__('Color 1', 'hazrath-advanced-cta-block')}
                        value={bgGradient1}
                        onChange={(color) => setAttributes({ bgGradient1: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />

                    <ColorControl
                        label={__('Color 2', 'hazrath-advanced-cta-block')}
                        value={bgGradient2}
                        onChange={(color) => setAttributes({ bgGradient2: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />

                    <RangeControl
                        label={__('Gradient Angle', 'hazrath-advanced-cta-block')}
                        value={bgGradientAngle}
                        onChange={(value) => setAttributes({ bgGradientAngle: value })}
                        min={0}
                        max={360}
                    />

                </>
            )}
        </>
    );
}
export default BackgroundColor;