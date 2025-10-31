import { RichText } from '@wordpress/block-editor';
const BlockName = ({ attributes }) => {
	const {headingTag, heading, description, buttonText} = attributes;

	return <div className={`callToActionBlock`}>
		<div className="hero-content">
			<RichText.Content
				tagName={headingTag}
				value={heading}
				className="main-heading"
			/>
			<RichText.Content
				tagName="p"
				value={description}
				className="description"
			/>
			<button className="cta-button">{buttonText}</button>
		</div>
	</div>
}
export default BlockName;