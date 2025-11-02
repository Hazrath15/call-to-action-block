<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$id = wp_unique_id( 'callToActionBlock-' );
?>
<div <?php echo wp_kses_post(get_block_wrapper_attributes()); ?> id="<?php echo esc_attr( $id ); ?>" data-attributes="<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>" ></div>