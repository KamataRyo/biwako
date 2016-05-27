<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package birder
 */

?>

		</div><!-- #content -->
	</div><!-- .container -->

	<div class="container">
		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="site-info">
				<p class="text-center">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'birder' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'birder' ), 'WordPress' ); ?></a>
				<br class="sep" />
					<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'birder' ), 'birder', '<a href="https://biwako.io/" rel="designer">KamataRyo</a>' ); ?>
				</p>
			</div><!-- .site-info -->
		</footer><!-- #colophon -->
	</div><!-- .container -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
