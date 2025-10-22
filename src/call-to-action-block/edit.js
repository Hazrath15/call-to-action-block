
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {headingTag, heading, description, buttonText} = attributes;
	return (
		<div { ...useBlockProps() }>
			<div className={`callToActionBlock`}>
				<div className="hero-content">
					<RichText
						tagName={headingTag}
						value={heading}
						className="main-heading"
						onChange={(val) => setAttributes({ heading: val })}
						placeholder="Heading..."
					/>
					<RichText
						tagName="p"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
						placeholder="Description..."
						className="description"
					/>
					<button className="cta-button" onClick={() => setAttributes({ buttonText: 'Click me' })}>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}
