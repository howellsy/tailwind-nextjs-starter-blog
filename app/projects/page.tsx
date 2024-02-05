import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Script from 'next/script'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400" id="projects-intro">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                id={d.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Script id="breadButterContentGating">
        {`
          null == window.breadbutterQueue && (window.breadbutterQueue = []), window.injectBreadButter = function (e) { "undefined" != typeof BreadButter && BreadButter.init ? e() : window.breadbutterQueue.push(e) };
          injectBreadButter(function () {
              BreadButter.ui.contentGating({
              locale: {
                  CONTENT_GATING: {
                      TITLE: "Your header goes here",
                      SUBTITLE: "Your sub header goes here"
                  }
              },
              scroll_limit: 0,
              time_limit: 0,
              image_source: '/static/images/google.png',
              image_type: 'fill'
          });
          });
        `}
      </Script>
    </>
  )
}
