use strict;
use warnings;
use utf8;

my $teaser = q~<section class="blog-teaser" aria-labelledby="blog-teaser-title"><div class="blog-teaser__head"><div><p class="blog-teaser__eyebrow">Nos derniers conseils</p><h2 id="blog-teaser-title">Découvrez trois articles du blog.</h2></div><a class="blog-teaser__all" href="/blog.html">Voir tous les articles ↗</a></div><div class="blog-teaser__grid"><a class="blog-teaser__card" href="/article-seo-erreurs.html"><img src="/assets/blog-seo-erreurs.jpg" alt="Illustration des erreurs qui fragilisent le référencement d’un site" loading="lazy" decoding="async"><span class="blog-teaser__body"><span class="blog-teaser__tag">SEO</span><h3>5 erreurs SEO qui coûtent des clients</h3><span class="blog-teaser__read">Lire l’article →</span></span></a><a class="blog-teaser__card" href="/article-geo.html"><img src="/assets/blog-geo-ia.jpg" alt="Sources structurées alimentant une réponse produite par une intelligence artificielle" loading="lazy" decoding="async"><span class="blog-teaser__body"><span class="blog-teaser__tag">GEO</span><h3>Comment apparaître dans les réponses des IA</h3><span class="blog-teaser__read">Lire l’article →</span></span></a><a class="blog-teaser__card" href="/article-strategie.html"><img src="/assets/blog-strategie-digitale.jpg" alt="Feuille de route reliant site, audience, contenu et croissance" loading="lazy" decoding="async"><span class="blog-teaser__body"><span class="blog-teaser__tag">Stratégie</span><h3>Créer sa stratégie digitale avec des priorités claires</h3><span class="blog-teaser__read">Lire l’article →</span></span></a></div></section>~;

my @files = `git ls-files '*.html'`;
for my $name (@files) {
  chomp $name;
  next if $name eq 'blog.html' || $name eq 'dist/blog.html';
  next unless -f $name;
  open my $in, '<:encoding(UTF-8)', $name or die "$name: $!";
  local $/;
  my $html = <$in>;
  close $in;
  next unless $html =~ /<section class="first-conversation"/;
  $html =~ s/<section class="blog-teaser".*?<section class="first-conversation"/$teaser<section class="first-conversation"/s;
  $html =~ s/<section class="first-conversation"/$teaser<section class="first-conversation"/ unless $html =~ /class="blog-teaser"/;
  open my $out, '>:encoding(UTF-8)', $name or die "$name: $!";
  print {$out} $html;
  close $out;
}
