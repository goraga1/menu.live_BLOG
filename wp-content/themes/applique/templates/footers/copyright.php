<?php
$copy_content = get_theme_mod( 'df_foot_copy' );

if ( function_exists( 'icl_register_string' ) ) {
	icl_register_string( 'Copyright Content', 'footer text &#45; ' . $copy_content, $copy_content );
}

$footer_text = function_exists( 'icl_t' ) ? icl_t( 'Copyright Content', 'footer text &#45; ' . $copy_content, $copy_content ) : $copy_content;
?>

<div class="siteinfo">

	<?php if ( $footer_text == '' ): ?>

		<p><?php echo sprintf( '%1$s %4$s %3$s %2$s', esc_html__( 'Copyright &copy; ', 'applique' ) . '<span itemprop="copyrightYear">' . date( 'Y' ) . '</span>', get_bloginfo( 'name' ) . '.', esc_html__( 'All Rights Reserved.', 'applique' ), '<span itemprop="copyrightHolder">DAHZ</span>' ); ?></p>

	<?php else : ?>

		<?php echo do_shortcode( $footer_text ); ?>

	<?php endif ?>

</div><!-- end of site info -->