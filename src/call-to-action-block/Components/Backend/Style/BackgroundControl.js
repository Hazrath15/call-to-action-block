/**
 * BackgroundControl.js
 * Solid color + Gradient picker (no responsive tabs)
 */

import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
    BaseControl,
    Button,
    ColorPicker,
    RangeControl,
    SelectControl,
    Tooltip,
} from '@wordpress/components';

const BackgroundControl = ({ attributes, setAttributes }) => {
    const { bgType } = attributes;

    return (
        <>
        <div className="bg-control">
            <SelectControl
                label={__('Background Type', 'call-to-action-block')}
                value={bgType}
                options={[
                    { label: 'Color', value: 'color' },
                    { label: 'Gradient', value: 'gradient' },
                ]}
                onChange={(newVal) => {
                    setAttributes({ bgType: newVal });
                }}
            />
        </div>
        {bgType === 'color' && (
            <ColorPicker
                label={__('Background Color', 'call-to-action-block')}
                // value={bgColor}
                // onChange={(newVal) => setAttributes({ bgColor: newVal })}
            />
        )}
        </>
    );
};

export default BackgroundControl;