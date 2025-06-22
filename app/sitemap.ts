import { MetadataRoute } from 'next';
import { getAllNewsList } from './_libs/microcms';

const aURL = process.env.SITE_URL || 'http://localhost:3000';
const buildurl = (path?: string) => `${aURL}${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const newsContents = await getAllNewsList();

    const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
        url: buildurl(`/news/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const now = new Date();

    return [
        {
            url: buildurl(),
            lastModified: now,
        },
        {
            url: buildurl('/menu'),
            lastModified: now,
        },
        {
            url: buildurl('/news'),
            lastModified: now,
        },
        {
            url: buildurl('/map'),
            lastModified: now,
        },
        {
            url: buildurl('/contact'),
            lastModified: now,
        },
        ...newsUrls,
    ];
}
