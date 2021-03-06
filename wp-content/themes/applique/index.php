<?php
/* Define several variables used in conditional. */
$skin_lay = get_theme_mod( 'df_skin', 'df-skin-boxed' ); // Skin Layout Style
$blog_std = get_theme_mod( 'df_blog_layout', 'fit_2_col' ); // Blog Layout
?>

<?php get_header(); ?>

	<?php if ( ( is_home() && is_front_page() ) ) : ?>
		<?php get_sidebar( 'blog' ); ?>
	<?php endif; ?>

	<div id="content-wrap">

		<div class="main-sidebar-container container">

			<div class="row">

				<?php
				/**
				 * `dahz_attr( 'content' )` are function to print attribute and microdata in main content element.
				 * This function locate in `libraries/attr.php` under function named `dahz_attr_content`.
				 */ ?>
				<div <?php dahz_attr( 'content' ); ?>>

					<?php if ( have_posts() ) : // Check if have post. ?>

						<div class="<?php echo apply_filters( 'df_wrap_class', 'df_blog_wrapper_classes' ); ?>">

							<?php while ( have_posts() ) : the_post(); // Loads the post data. ?>

								<?php if ( is_sticky() ) : ?>

									<?php get_template_part( 'templates/contents/content', 'sticky' ); ?>

								<?php elseif ( $blog_std == 'standard' ) : ?>

									<?php if ( $skin_lay != 'df-skin-boxed' ): ?>

										<?php get_template_part( 'templates/contents/content', 'standard' ); ?>

									<?php else: ?>

										<?php get_template_part( 'templates/contents/content' ); ?>

									<?php endif; ?>

								<?php elseif ( $blog_std == 'list' ) : ?>

									<?php get_template_part( 'templates/contents/content', 'list' ); ?>

								<?php elseif ( $blog_std == 'grid_full' ) : ?>

									<?php if ( $wp_query->current_post == 0 && !is_paged() ) : ?>

										<?php if ( $skin_lay != 'df-skin-boxed' ): ?>

											<?php get_template_part( 'templates/contents/content', 'standard' ); ?>

										<?php else: ?>

											<?php get_template_part( 'templates/contents/content' ); ?>

										<?php endif; ?>

									<?php else : ?>

										<?php get_template_part( 'templates/contents/content' ); ?>

									<?php endif; ?>

								<?php elseif ( $blog_std == 'list_full' ) : ?>

									<?php if ( $wp_query->current_post == 0 && !is_paged() ) : ?>

										<?php if ( $skin_lay != 'df-skin-boxed' ): ?>

											<?php get_template_part( 'templates/contents/content', 'standard' ); ?>

										<?php else: ?>

											<?php get_template_part( 'templates/contents/content' ); ?>

										<?php endif; ?>

									<?php else : ?>

										<?php get_template_part( 'templates/contents/content', 'list' ); ?>

									<?php endif; ?>

								<?php elseif ( $blog_std != 'list' || $blog_std != 'standard' ) : ?>

									<?php get_template_part( 'templates/contents/content' ); ?>

								<?php endif; ?>

								<?php if ( is_singular() ) : // If viewing a single post/page/CPT. ?>

									<?php if ( comments_open() ) : ?>

							 			<?php comments_template( '', true ); // Loads the comments.php template. ?>

									<?php endif; ?>

								<?php endif; // If viewing a single post/page/CPT. ?>

							<?php endwhile; // End of loads the post data. ?>

						</div>

						<?php df_pagination_switcher(); ?>

					<?php else : ?>

						<?php get_template_part( 'templates/contents/content', 'empty' ); ?>

					<?php endif; ?>

				</div>

				<?php get_sidebar(); ?>

			</div>

		</div>

		<?php echo df_social_account(); ?>
		<?php echo df_miscellaneous();	?>

	</div>

<?php get_footer(); ?>