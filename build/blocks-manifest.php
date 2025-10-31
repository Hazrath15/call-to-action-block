<?php
// This file is generated. Do not modify it manually.
return array(
	'call-to-action-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/call-to-action-block',
		'version' => '0.1.0',
		'title' => 'Call To Action Block',
		'category' => 'widgets',
		'icon' => 'megaphone',
		'description' => 'A simple, customizable call-to-action block for Gutenberg.',
		'example' => array(
			
		),
		'attributes' => array(
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
						'bottom' => '0',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '0',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '0',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
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
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'left',
				'right',
				'full'
			),
			'color' => array(
				'background' => true,
				'gradients' => true,
				'text' => false
			)
		),
		'textdomain' => 'call-to-action-block',
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
