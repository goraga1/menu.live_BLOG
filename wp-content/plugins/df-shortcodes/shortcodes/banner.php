<?php

function df_banner_sc( $atts, $content = null) {
    $output_img = $html = '';

	extract( shortcode_atts( array(
		'title'			=> '',
		'subtitle'		=> '',
		'typo_type'		=> '',
		'link_url'      => '',
		'link_target'	=> '', // new tab / current tab
		'back_image'    => '', // url
		// 'init_html'		=> '',
		// 'img'           => '',
		'height'        => '',
		'el_class'      => ''
	), $atts ) );

	$return_img = get_template_directory_uri().'/assets/images/placeholder.png';

	if ( $back_image == '' ) {
		$bg_type = 'style="background-image: url(' . esc_url( $return_img ) . ');"';
	} else {
		$bg_type = 'style="background-image: url('. $back_image .');"';
	}

	$html .= '<div class="banner-wrapper aligncenter '. $el_class .'" style="height:'. $height .'px;">';
	$html .= '<div class="banner-inner-img" '. $bg_type .'>';
	$html .= '</div>';
	$html .= '<a href="'. $link_url .'" target="'. $link_target .'" class="banner-link"></a>';
	$html .= '<div class="banner-inner-wrapper">';
	$html .= '<'. $typo_type .'>'. $title .'</'. $typo_type .'>';
	$html .= '<p>'. $subtitle .'</p>';
	$html .= '</div>';
	$html .= '</div>';

	return $html;
}
add_shortcode('df_banner_sc', 'df_banner_sc');