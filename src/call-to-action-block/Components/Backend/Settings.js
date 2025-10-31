import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { TypographyControl } from './Style/TypographyControl';
import ColorControl from './Style/ColorControl';
function Settings( { attributes, setAttributes } ) {
	const { headingTag, alignment, headingColor, buttonText, buttonUrl } = attributes;
    {/* Inspector Settings */}
    return(
        <>
            <InspectorControls>
                <PanelBody title={__('General', 'call-to-action-block')} initialOpen={true}>
                    <SelectControl
                        label={__('Alignment', 'call-to-action-block')}
                        value={alignment}
                        options={[
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' },
                        ]}
                        onChange={(value) => setAttributes({ alignment: value })}
                    />
                    <SelectControl
                        label={__('Heading HTML Tag', 'call-to-action-block')}
                        value={headingTag}
                        options={[
                            { label: 'H1', value: 'h1' },
                            { label: 'H2', value: 'h2' },
                            { label: 'H3', value: 'h3' },
                            { label: 'H4', value: 'h4' },
                            { label: 'H5', value: 'h5' },
                            { label: 'H6', value: 'h6' },
                        ]}
                        onChange={(value) => setAttributes({ headingTag: value })}
                    />
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="heading" />
                    <ColorControl 
						label={__('Color', 'call-to-action-block')}
						value={headingColor}
						onChange={(color) => setAttributes({ headingColor: color })}
						defaultColor=""
						className="color-picker-control"
					/>
                </PanelBody>
                <PanelBody title={__('Button', 'call-to-action-block')} initialOpen={false}>
                    <TextControl
                        label={__('Button Text', 'call-to-action-block')}
                        value={buttonText}
                        onChange={(value) => setAttributes({ buttonText: value })}
                    />
                    <TextControl
                        label={__('Button URL', 'call-to-action-block')}
                        value={buttonUrl}
                        onChange={(value) => setAttributes({ buttonUrl: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <InspectorControls group="styles">
                <PanelBody title={__('Button', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="button" />
                </PanelBody>
            </InspectorControls>
        </>
    )
}
export default Settings;