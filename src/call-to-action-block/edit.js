
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './Components/Backend/Settings';
import Style from './Style';

export default function Edit({ attributes, setAttributes }) {
	const { headingTag, heading, description, buttonText } = attributes;
	console.log(arguments);
	
	return (
		<div { ...useBlockProps() }>

			<Settings attributes={attributes} setAttributes={setAttributes} />
			<Style attributes={attributes} />
			<div className={`callToActionBlock`}>
				<div className="hero-content">
					<RichText
						tagName={headingTag}
						value={heading}
						className="main-heading"
						onChange={(val) => setAttributes({ heading: val })}
						placeholder="Heading..."
						allowedFormats={[]}
					/>
					<RichText
						tagName="p"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
						placeholder="Description..."
						className="description"
					/>
					<button className="cta-button">
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}
