const title = 'template-next-ts';
const description =
    'Template NextJS 10 - TypeScript - TailwindCSS - Next SEO - NProgress';

const SEO = {
    title,
    description,
    canonical: 'https://template.ducthu.io',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://template.ducthu.io',
        title,
        description,
        images: [
            {
                url: '',
                alt: title,
                width: 1200,
                height: 700,
            },
        ],
    },
    twitter: {
        handle: '@ducthuco',
        site: 'https://ducthu.io',
        cardType: 'summary_large_image',
    },
};

export default SEO;
