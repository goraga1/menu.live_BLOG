<?php

function df_columns_sc( $atts, $content = null, $tag ) {
    $last = $type = '';

    extract( shortcode_atts(  array(
        'el_class'     => '' // extra classes
    ), $atts ) );

    if ( $el_class != '' ) {
        $el_class = ' ' . $el_class;
    }

    // check the shortcode tag to add a "last" class
    if ( strpos( $tag, '_last' ) !== false ) {
        $tag = str_replace( '_last', ' last', $tag);
    }

    $html = '<div class="' . $tag . $last . $el_class . '">' . do_shortcode( $content ) . '</div>';

    return apply_filters( 'df_columns_html', $html );
}

$columns = array(
    'col-md-6', // 1/2
    'col-md-6_last',
    'col-md-4', // 1/3
    'col-md-4_last'
);

foreach( $columns as $column ) {
    add_shortcode( $column, 'df_columns_sc' );
}

function df_columns_wrap( $atts, $content = null ) {

    extract( shortcode_atts(  array(
        'class'     => '' // extra classes
    ), $atts ) );

    $html = '<div class="row df-sc-columns ' . $class . '">' . do_shortcode( $content ) . '</div>';

    return $html;
}
add_shortcode( 'df_row', 'df_columns_wrap' );