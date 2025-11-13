import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Icon bileşenleri
const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-current">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
  </svg>
);

const GalleryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 fill-current">
    <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V320c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"/>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current mr-1">
    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current mr-1">
    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current mr-1">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4 fill-current mr-1">
    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current mr-1">
    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
  </svg>
);

interface Category {
  name: string;
  slug: string;
}

interface ArticleCardProps {
  title: string;
  slug: string;
  excerpt: string;
  thumbnailUrl: string;
  categories: Category[];
  author: {
    name: string;
    slug: string;
  };
  date: string;
  likeCount: number;
  postFormat?: 'standard' | 'quote' | 'video' | 'gallery';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug,
  excerpt,
  thumbnailUrl,
  categories,
  author,
  date,
  likeCount,
  postFormat = 'standard'
}) => {
  
  // Post format icon
  const renderPostFormatIcon = () => {
    switch (postFormat) {
      case 'quote':
        return <QuoteIcon />;
      case 'video':
        return <PlayIcon />;
      case 'gallery':
        return <GalleryIcon />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="item rounded-md overflow-hidden shadow-md bg-white mb-8 hover:shadow-lg transition-shadow duration-300">
      {/* Görsel alanı */}
      <div className="thumbnail relative">
        <Link href={`/article/${slug}`} className="block relative overflow-hidden pb-[65%]">
          <Image 
            src={thumbnailUrl} 
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Post format icon */}
        {postFormat !== 'standard' && (
          <Link href={`/article/${slug}`} className="icon-post-format absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
            {renderPostFormatIcon()}
          </Link>
        )}
      </div>

      {/* İçerik alanı */}
      <div className="grid-header-box p-5 flex flex-col justify-between items-center">
        {/* Kategoriler */}
        <div className=" mb-3">
          {categories.map((category, index) => {
            // Eğer bu alt kategori ise (index > 0 ve parent category varsa) parent/child formatında link oluştur
            let categoryHref = "";
            if (index > 0 && categories.length > 1 && categories[0].slug) {
              // Alt kategori: parent/child formatında
              categoryHref = category.slug 
                ? `/${categories[0].slug}/${category.slug}` 
                : `/category/${category.slug || category.name}`;
            } else {
              // Ana kategori veya tek kategori
              categoryHref = category.slug 
                ? `/${category.slug}` 
                : `/category/${category.slug || category.name}`;
            }
            
            return (
              <React.Fragment key={category.slug || index}>
                <Link 
                  href={categoryHref} 
                  className=" mr-2 text-xs font-bold uppercase text-primary hover:text-primaryState-hover font-categoryTitle"
                >
                  {category.name}
                </Link>
                {index < categories.length - 1 && ", "}
              </React.Fragment>
            );
          })}
        </div>

        {/* Başlık */}
        <h2 className=" font-mainTitle text-xl md:text-2xl font-semibold mb-3">
          <Link href={`/article/${slug}`} className="hover:text-primary transition-colors duration-300 font-mainTitle">
            {title}
          </Link>
        </h2>

        {/* Yazar ve tarih */}
        <div className="grid-post-box-meta text-text-light text-sm  flex flex-wrap gap-2">
          <span className="author-italic">
            <span>by </span>
            <Link href={`/author/${author.slug}`} className="hover:text-primary text-text">
              {author.name}
            </Link>
          </span>
          <span className='text-primary-active' >|</span>
          <span className="otherl-date">
            <time className="entry-date published">{formatDate(date)}</time>
          </span>
        </div>
      </div>
      
      {/* Dekoratif çizgi - özel CSS sınıfı kullanarak */}
      <div className="px-5 flex justify-center mb-3">
        <div className="decorative-line"></div>
      </div>
      
      {/* İçerik özeti */}
      <div className="item-content entry-content px-5 pb-3 text-text text-sm">
        <p>{excerpt}</p>
      </div>

      {/* Paylaşım butonları */}
      <div className=" border-t border-gray-100 p-4 w-full">
        <div className="flex mx-12 justify-between items-center">
          {/* Beğeni */}
          <button className=" flex items-center text-text-light hover:text-primary">
            <HeartIcon />
            <span className="dt-share">{likeCount}</span>
          </button>
          
          {/* Sosyal medya paylaşım butonları */}
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yoursite.com/article/${slug}`)}`} 
            target="_blank" rel="noreferrer" 
            className="post-share-item flex items-center text-text-light hover:text-primary">
            <FacebookIcon />
            <span className="sr-only">Facebook</span>
          </Link>
          
          <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://yoursite.com/article/${slug}`)}`} 
            target="_blank" rel="noreferrer"
            className="post-share-item flex items-center text-text-light hover:text-primary">
            <TwitterIcon />
            <span className="sr-only">Twitter</span>
          </Link>
          
          <Link href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://yoursite.com/article/${slug}`)}&media=${encodeURIComponent(thumbnailUrl)}&description=${encodeURIComponent(title)}`} 
            target="_blank" rel="noreferrer"
            className="post-share-item flex items-center text-text-light hover:text-primary">
            <PinterestIcon />
            <span className="sr-only">Pinterest</span>
          </Link>
          
          <Link href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`https://yoursite.com/article/${slug}`)}`}
            className="post-share-item flex items-center text-text-light hover:text-primary">
            <EmailIcon />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
