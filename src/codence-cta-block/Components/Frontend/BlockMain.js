import { RichText } from '@wordpress/block-editor';
import Style from '../../Style';
const BlockName = ({ attributes }) => {
	const { headingTag, heading, description, buttonText } = attributes;

	return (
		<>
		<Style attributes={attributes} />
			<div className={`callToActionBlock`}>
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
		</>
	)
}
export default BlockName;