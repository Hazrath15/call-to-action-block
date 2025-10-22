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
			'description' => array(
				'type' => 'string',
				'default' => 'Beautiful UI sections, interactive features, and smooth animations.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Get Started'
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
