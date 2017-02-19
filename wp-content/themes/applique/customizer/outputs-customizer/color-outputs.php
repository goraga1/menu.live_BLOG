<?php

if ( !defined( 'ABSPATH' ) ) { exit; }

/*
 * Customizer Color Option Settings
 *
 * 1. General Color Options
 * 2. Button Color Options
 * 3. Widget Color Options
 * 4. Page Loader Background Options
 */

// ======== 1. General Color Options ======== //
$df_body_bg_color				= get_theme_mod( 'df_body_background_color', '#ede8e0' );
$df_content_bg_color			= get_theme_mod( 'df_body_content_color', '#f7f7f3' );
$df_content_border_color		= get_theme_mod( 'df_border_content_accent_color', '#d9d9d9' );
$df_accent_color				= get_theme_mod( 'df_accent_color', '#bba681' );
$df_accent_color_hover			= get_theme_mod( 'df_accent_color_hover', '#736f68' );
$df_heading_color				= get_theme_mod( 'df_heading_color', '#31302e' );
$df_body_font_color				= get_theme_mod( 'df_body_font_color', '#6b6051' );
$df_meta_font_color				= get_theme_mod( 'df_meta_font_color', '#2e210f' );
$df_border_accent_color 		= get_theme_mod( 'df_border_accent_color', '#c1beb8' );

// ======== 2. Button Color Options ======== //
// Button Fill
$btn_fill_color					= get_theme_mod( 'df_button_fill_color', '#565148' );
$btn_fill_color_hover			= get_theme_mod( 'df_button_fill_hover_color', '#444444' );
$btn_fill_font_color			= get_theme_mod( 'df_button_fill_font_color', '#ffffff' );

// Button Outline
$btn_outline_border_color		= get_theme_mod( 'df_button_outline_border_color', '#c1beb8' );
$btn_outline_font_color			= get_theme_mod( 'df_button_outline_font_color', '#c1beb8' );
$btn_outline_color_hover		= get_theme_mod( 'df_button_outline_hover_color', '#565148' );
$btn_outline_font_color_hover	= get_theme_mod( 'df_button_outline_hover_font_color', '#FFFFFF' );

// ======== 3. Widget Color Options ======== //
$df_widget_heading_color 		= get_theme_mod( 'df_widget_heading_color', '#070707' );

$df_skin_opt 					= get_theme_mod( 'df_skin', 'df-skin-boxed' );

// ======== 4. Page Loader Background Options ======== //
$enable_page_loader 			= get_theme_mod( 'df_enable_page_loader', 0 );
$page_loader_bgcolor			= get_theme_mod( 'df_loader_background_color', '#FFFFFF' );
?>

/* ========== 1. General Color Options ========== */

<?php if ( $df_skin_opt == 'df-skin-boxed' ) : ?>
/* Body Color */
.df-wrapper {
	background-color: <?php echo esc_html( $df_body_bg_color ); ?>;
}

/* Content Color */
.df-sidebar .widget:not(.banner-widget):not(.category-widget):not(.recent-big-widget),
.blog-widget-area-wrap .widget:not(.banner-widget):not(.category-widget):not(.recent-big-widget),
.grid-wrapper, .df-postmeta-wrapper, .df-skin-boxed .type-post.df-list .df-inner-posts, .df-affiliate .df-affiliate-title span, .single .df-content,
.page .df-content, .search .grid-wrapper, .search .df-postmeta-wrapper, .df-skin-boxed .type-post .df-post-title .boxed-wrap,
.df-skin-boxed .type-page .df-post-title .boxed-wrap, .df-skin-boxed .type-post.df-standard .df-affiliate,
.df-skin-boxed .type-page.df-standard .df-affiliate, body:not(.single) .sticky .sticky-content,
.df-skin-boxed .front-content .widget:not(.banner-widget):not(.category-widget):not(.recent-big-widget),
.df-skin-boxed .front-content .recent-big-widget .ver2 li, .df-skin-boxed .type-post.df-standard .entry-content, .df-skin-boxed .type-page.df-standard .entry-content,
.df-skin-boxed .df-sidebar .recent-big-widget .ver2,
.df-skin-boxed .type-page.df-list-full .row, .df-skin-boxed .type-post.df-list-full .row {
	background-color: <?php echo esc_html( $df_content_bg_color ); ?>;
}

/* Content Border Color */
.df-skin-boxed .grid-outer {
	border-color: <?php echo esc_html( $df_content_border_color ); ?>;
}

<?php endif; ?>

/* Accent Color */
.df_separator a.link, .widget_text a, .df-content a, .entry-content a, .df-single-category a, .df-post-on a,
.df-postmeta .comment-permalink, .author-content .author-social a, .df-pagination.df-single-paging .text-content a .more-article,
.related-post-content .entry-terms a, .comment-head .reply a, .comment-head .edit a, .comments-area a, .logged-in-as a,
.widget_categories li a, .widget td a, .widget .related-post-content .entry-terms a, .widget_archive a, .widget_meta li a,
.widget_pages li a, .widget_recent_comments .recentcomments a, .widget_zilla_likes_widget li a, .widget_rss a, .widget_nav_menu li a, .about-widget a {
	color: <?php echo esc_html( $df_accent_color ); ?>;
}

input:focus, select:focus, textarea:focus, input:hover, select:hover, textarea:hover {
	border-color: <?php echo esc_html( $df_accent_color ); ?>;
}

/* Accent Color Hover */
h1 a:focus, h2 a:focus, h3 a:focus, h4 a:focus, h5 a:focus, h6 a:focus, .widget_text a:hover,
h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover, .entry-content a:hover,
.df-single-category a:hover, .df-content a:hover, .df-post-on a:hover, .df-postmeta .comment-permalink:hover,
.author-content .author-social a:hover, .df-pagination.df-single-paging .text-content a:hover .more-article,
.related-post-content .entry-terms a:hover, .comment-head .reply a:hover, .comment-head .edit a:hover,
.comments-area .comment-author a:hover, .comments-area a:hover,.logged-in-as a:hover, .widget_categories li a:hover,
.widget td a:hover, .widget .related-post-content .entry-terms a:hover, .widget_archive a:hover,
.widget_meta li a:hover, .widget_pages li a:hover, .widget_recent_comments .recentcomments a:hover,
.widget_recent_entries li a:hover, .widget_zilla_likes_widget li a:hover, .widget_rss a:hover,
.widget_nav_menu li a:hover, .df-misc-search:hover, .df-misc-mail:hover, .df-misc-archive:hover,
.about-widget a:hover, .author-name:hover a, .comment-author:hover a, .related-title:hover a,
.custom-archive h4:hover a, .df-single-paging h4:hover a {
	color: <?php echo esc_html( $df_accent_color_hover ); ?>;
}

/* Header Color */
h1, h2, h3, h4, h5, h6, blockquote, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .df-related-post .related-post-title,
.df-related-post .related-title, .comment-reply-title, .widget_recent_entries li a, .df-content h2 a, .author-name a,
.comment-author a, .related-title a, .custom-archive h4 a, .df-single-paging h4 a {
	color: <?php echo esc_html( $df_heading_color ); ?>;
}

/* Body Font Color */
p, table, li, dl, address, label, .widget_text, .df-floating-subscription, .df-floating-subscription p {
	color: <?php echo esc_html( $df_body_font_color ); ?>;
}

/* Meta Font Color */
.df-header-title:not(.df-add_image) .df-header span, .df-postmeta .df-share, .df-post-meta, .df-page-subtitle, .df-social-connect a, .df-misc-section a, .like-btn a, .df-share li a, .df-single-paging .prev-article, .df-comments-meta, .comment-head .comment-published, .widget.quote-widget strong, .widget.widget_recent_entries .post-date, .widget_zilla_likes_widget .zilla-likes-count, .widget_rss .rss-date, .recent-big-widget .df-post-on, .about-widget ul a .fa-facebook, .about-widget ul a .fa-twitter, .about-widget ul a .fa-google-plus, .about-widget ul a .fa-pinterest, .about-widget ul a .fa-instagram, .about-widget ul a .fa-heart, .about-widget ul a .fa-rss{
	color: <?php echo esc_html( $df_meta_font_color ); ?>;
}

/* Border Color */
.df-postmeta, .widget h4, .recent-big-widget .separator,
.df-skin-light .widget > h4:before, .df-skin-light .df-sidebar .widget h4:before, .df-skin-light .sticky-sidebar,
.df-skin-light .widget li, .df-skin-boxed .type-post.df-list .df-inner-posts, .df-skin-boxed .type-page.df-list .df-inner-posts, .df-skin-boxed .type-post .grid-wrapper, .df-skin-boxed .type-page .grid-wrapper, .df-skin-boxed .type-page.df-list, .df-skin-boxed .type-post.df-list, .df-skin-boxed .df-sidebar .widget:not(.banner-widget):not(.category-widget):not(.recent-big-widget),
.df-skin-boxed .type-post, .df-skin-boxed .type-page,
.df-pagenav div > a, .df-skin-boxed .type-post.df-standard .df-postmeta-wrapper, .df-skin-boxed .type-page.df-standard .df-postmeta-wrapper,
.df-skin-boxed .type-post.df-standard .entry-content, .df-skin-boxed .type-page.df-standard .entry-content, .df-skin-boxed .type-post.df-standard:not(.sticky) .df-post-title,
.df-skin-boxed .type-page .grid-wrapper, .df-skin-boxed .type-page[class*='col-md-'] .df-postmeta-wrapper,
.df-skin-boxed .type-post.df-standard .df-affiliate, .df-skin-boxed .type-page.df-standard .df-affiliate,
.df-skin-boxed .df-sidebar .recent-big-widget .ver2,
.df-skin-boxed .type-page:not(.df-standard):not(.df-list) .df-postmeta-wrapper, .df-skin-boxed .df-inner-posts,
.df-skin-boxed .type-page.df-list-full .row,
.df-skin-boxed .type-post.df-list-full .row {
	border-color: <?php echo esc_html( $df_border_accent_color ); ?>;
}
.df-skin-boxed .type-page.df-list-full .df-postmeta-wrapper,
.df-skin-boxed .type-post.df-list-full .df-postmeta-wrapper {
	border-color: <?php echo esc_html( $df_border_accent_color ); ?>!important;
}
svg {
	stroke: <?php echo esc_html( $df_border_accent_color ); ?>;
}

/* Recent Big Widget Color */
.column-12 .recent-big-widget .df-single-category:after, .column-12 .recent-big-widget .df-post-on:after, .column-2 .col-md-8 .recent-big-widget .df-single-category:after, .column-2 .col-md-8 .recent-big-widget .df-post-on:after{
	background-color: <?php echo esc_html( $df_border_accent_color ); ?>;
}

/* ========== 2. Button Color Options ========== */
/* Button Fill */
.button, input[type="submit"], input[type="reset"], input[type="button"]{
	background: <?php echo esc_html( $btn_fill_color ); ?>;
	border:  <?php echo esc_html( $btn_fill_color ); ?>;
}
.button:hover, input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover{
	background: <?php echo esc_html( $btn_fill_color_hover ); ?>;
	border: <?php echo esc_html( $btn_fill_color_hover ); ?>;
	color: <?php echo esc_html( $btn_fill_font_color ); ?>;
}

/* Button Outline */
.button.outline, button.outline, input[type="submit"].outline, input[type="reset"].outline, input[type="button"].outline, .df-pagenav div > a, .df-page-numbers ul > li > .page-numbers, .df-page-numbers ul > li > .page-numbers.dots, .df-page-numbers ul > li > .page-numbers.dots:hover, .df-page-numbers ul > li > .page-numbers.dots:focus, .widget_tag_cloud a,  .single .post_tag a{
	border-color: <?php echo esc_html( $btn_outline_border_color ); ?>;
	color: <?php echo esc_html( $btn_outline_font_color ); ?>;
}
.button.outline:hover, button.outline:hover, input[type="submit"].outline:hover, input[type="reset"].outline:hover, input[type="button"].outline:hover, .df-pagenav div > a:hover, .df-pagenav div > a:focus, .df-page-numbers ul > li > .page-numbers.current, .df-page-numbers ul > li > .page-numbers.current:hover, .df-page-numbers ul > li > .page-numbers.current:focus, .df-page-numbers ul > li > .page-numbers:hover, .df-page-numbers ul > li > .page-numbers:focus, .widget_tag_cloud a:hover, .single .post_tag a:hover, .df-content-pagination span.button:not(.none){
	background: <?php echo esc_html( $btn_outline_color_hover ); ?>;
	border-color: <?php echo esc_html( $btn_outline_color_hover ); ?>;
	color: <?php echo esc_html( $btn_outline_font_color_hover ); ?>;
}
.df-pagenav .nav-next i,
.df-pagenav .nav-prev i{
	border-color: <?php echo esc_html( $btn_outline_border_color ); ?>;
}
.df-page-numbers .next i,
.df-page-numbers .prev i{
	border-color: <?php echo esc_html( $btn_outline_border_color ); ?>;
}

/* ========== 3. Widget Color Options ========== */
.widget h4, .recent-big-widget h3{
	color: <?php echo esc_html( $df_widget_heading_color ); ?>;
}

/* ========== 4. Page Loader Background Options ========== */
<?php if ( $enable_page_loader == '1' ): ?>

	.ajax_loader {
		background: <?php echo $page_loader_bgcolor; ?>;
	}

<?php endif ?>