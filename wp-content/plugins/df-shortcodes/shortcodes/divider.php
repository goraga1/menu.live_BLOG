<?php
if (!defined('ABSPATH')) die('-1');

/**
  * Divider with text
  *
  * @example [df_divider_text title="" title_align="" el_width="" style="" height="" accent_color="" border_size="" padding="" position="" el_class=""]
**/
function df_divider_text( $atts) {
	extract(shortcode_atts(array(
	    'title'         => '',
	    'title_align'   => '',
	    'el_width'      => '',
	    'style'         => '',
	    // 'height'        => '',
	    'border_t_width'=> '',
	    'accent_color'  => '',
	    'border_size'   => '',
	    'padding'       => '',
	    'position'      => '',
	    'el_class'      => ''
	), $atts));

	ob_start();

	$class = "df_separator df_content_element";

	$class .= ( $title_align != '' ) ? ' df_' . $title_align : '';
	$class .= ( $el_width != '' ) ? ' df_el_width_' . $el_width : ' df_el_width_100';
	$class .= ( $style != '' ) ? ' df_sep_' . $style : '';
	$class .= ( $position != '' ) ? ' df_sep_position_' . $position : '';
	$class .= ( $el_class != '' ) ? esc_attr( trim( $el_class ) ) : '';
	$class .= ( $title == '' ) ? ' divider_without_title' : '';

?>

	<div class="<?php echo esc_attr( trim( $class ) ); ?>" style="padding: <?php echo $padding ?>;">
	    	<h4>
	    		<span class="df_div_sepa" style="border-top-color: <?php echo $accent_color ?>;border-top-width: <?php echo $border_t_width; ?>;"></span>
	    <?php if ( $title != '' ) : ?>
	    		<span><?php echo $title; ?></span>
	    <?php endif; ?>
	    	</h4>
	</div>

<?php
	return ob_get_clean();
}
add_shortcode( 'df_divider_text', 'df_divider_text' );

/**
  * Divider
  *
  * @example [df_divider el_width="" style="" height="" accent_color="" padding="" position="" el_class=""]
**/
function df_divider( $atts ) {
	extract( shortcode_atts( array(
		'el_width' 		=> '',
		'style' 		=> '',
		// 'height'		=> '',
		'accent_color' 	=> '',
		// 'border_size'	=> '',
	    'border_t_width'=> '',
		'padding'		=> '',
		'position'		=> '',
		'el_class' 		=> ''
	), $atts ) );

	ob_start();

	echo do_shortcode( '[df_divider_text style="'. $style .'" accent_color="' . $accent_color . '" el_width="' . $el_width . '" el_class="' . $el_class . '" border_t_width="'. $border_t_width .'" padding="'. $padding .'" position="'. $position .'"]' );

	return ob_get_clean();
}
add_shortcode('df_divider', 'df_divider');

/**
  * Divider With Text and Link
  *
**/
function df_divider_text_link( $atts ) {
	extract( shortcode_atts( array(
	    'title'         => '',
	    // 'title_align'   => '',
	    'url_link'		=> '',
	    'title_link'	=> '',
	    'target_link'	=> '',
	    'text_link'		=> '',
	    'link_el_class'	=> '',
	    'font_color'	=> '',
		'el_width' 		=> '',
		'style' 		=> '',
		// 'height'		=> '',
		'border_t_width'=> '',
		'accent_color' 	=> '',
		// 'border_size'	=> '',
		'padding'		=> '',
		'position'		=> '',
		'el_class' 		=> ''
	), $atts ) );

	ob_start();

	$class = "df_separator df_content_element";

	// $class .= ($title_align!='') ? ' df_'.$title_align : '';
	$class .= ($el_width!='') ? ' df_el_width_'.$el_width : ' df_el_width_100';
	$class .= ($style!='') ? ' df_sep_'.$style : '';
	$class .= ($position!='') ? ' df_sep_position_'.$position : '';
	$class .= ($el_class!='') ? esc_attr( trim( $el_class ) ) : ''; 

	$link_class = 'link';
?>

	<div class="<?php echo esc_attr( trim ( $class ) ); ?>" style="padding: <?php echo $padding ?>;">
	    <div class="top_row"  style="border-bottom-color: <?php echo $accent_color ?>;border-bottom-width: <?php echo $border_t_width; ?>;">
		    <?php if($title!=''): ?>
		    	<h4 class="top_left"><?php echo $title; ?></h4>
		    <?php endif; ?>
		    <?php if ($url_link != '') : ?>
		    	<a class="<?php echo esc_attr( trim( $link_el_class ) ); ?><?php echo $link_class; ?>" href="<?php echo esc_url( $url_link ); ?>" title="<?php echo esc_attr( $title_link ); ?>" target="<?php echo $target_link; ?>">
		    		<span class="df_separator_float_right"><?php echo $text_link; ?></span>
		    	</a>
		    <?php endif; ?>
	    </div>
	</div>
<?php
	return ob_get_clean();
}
add_shortcode( 'df_divider_text_link', 'df_divider_text_link' );