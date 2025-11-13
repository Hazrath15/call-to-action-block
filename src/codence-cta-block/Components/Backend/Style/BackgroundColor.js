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
                label={__('Background Type', 'codence-cta-block')}
                value={bgType}
                options={[
                    { label: __('Solid Color', 'codence-cta-block'), value: 'color' },
                    { label: __('Gradient', 'codence-cta-block'), value: 'gradient' },
                ]}
                onChange={updateBgType}
            />

            {bgType === 'color' && (
                <>
                    <strong>{__('Background Color', 'codence-cta-block')}</strong>
                    <ColorControl
                        label={__('Choose Color', 'codence-cta-block')}
                        value={bgColor}
                        onChange={(color) => setAttributes({ bgColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                </>
            )}

            {bgType === 'gradient' && (
                <>
                    <strong>{__('Choose Gradient Background', 'codence-cta-block')}</strong>
                    <ColorControl
                        label={__('Color 1', 'codence-cta-block')}
                        value={bgGradient1}
                        onChange={(color) => setAttributes({ bgGradient1: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />

                    <ColorControl
                        label={__('Color 2', 'codence-cta-block')}
                        value={bgGradient2}
                        onChange={(color) => setAttributes({ bgGradient2: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />

                    <RangeControl
                        label={__('Gradient Angle', 'codence-cta-block')}
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