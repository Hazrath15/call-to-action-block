<?php
// This file is generated. Do not modify it manually.
return array(
	'advanced-call-to-action-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hazrath/advanced-call-to-action-block',
		'version' => '0.1.0',
		'title' => 'Advanced Call To Action Block',
		'category' => 'widgets',
		'icon' => 'megaphone',
		'description' => 'A simple, customizable call-to-action block for Gutenberg.',
		'example' => array(
			
		),
		'attributes' => array(
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Welcome to Our Web Experience'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Beautiful UI sections, interactive features, and smooth animations.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Get Started'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'sectionPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '100',
						'right' => '0',
						'bottom' => '100',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => '70',
						'right' => '0',
						'bottom' => '70',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => '50',
						'right' => '0',
						'bottom' => '50',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					)
				)
			),
			'sectionMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					)
				)
			),
			'headingFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 40
			),
			'headingFontSizeTablet' => array(
				'type' => 'number',
				'default' => 28
			),
			'headingFontSizeMobile' => array(
				'type' => 'number',
				'default' => 22
			),
			'headingFontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'headingTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'headingLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'headingLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'headingLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'headingPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '10',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '10',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '10',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'headingMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'descriptionFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 18
			),
			'descriptionFontSizeTablet' => array(
				'type' => 'number',
				'default' => 18
			),
			'descriptionFontSizeMobile' => array(
				'type' => 'number',
				'default' => 16
			),
			'descriptionFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'descriptionLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'descriptionLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'descriptionLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'descriptionPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '30',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '30',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '30',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'descriptionMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					)
				)
			),
			'buttonFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 16
			),
			'buttonFontSizeTablet' => array(
				'type' => 'number',
				'default' => 16
			),
			'buttonFontSizeMobile' => array(
				'type' => 'number',
				'default' => 16
			),
			'buttonFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'buttonLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'buttonLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'buttonLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'buttonPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '12',
						'right' => '21',
						'bottom' => '12',
						'left' => '21',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '12',
						'right' => '21',
						'bottom' => '12',
						'left' => '21',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '12',
						'right' => '21',
						'bottom' => '12',
						'left' => '21',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'buttonMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'buttonTextColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgType' => array(
				'type' => 'string',
				'default' => 'gradient'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgGradient1' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgGradient2' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgGradientAngle' => array(
				'type' => 'number',
				'default' => 90
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'left',
				'right',
				'full'
			)
		),
		'textdomain' => 'hazrath-advanced-cta-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-view.css',
		'render' => 'file:./render.php',
		'viewScript' => array(
			'file:./view.js',
			'react',
			'react-dom'
		)
	)
);
