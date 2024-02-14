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
      <Script id="breadButterContactUs">
        {`
          null == window.breadbutterQueue && (window.breadbutterQueue = []), window.injectBreadButter = function (e) { "undefined" != typeof BreadButter && BreadButter.init ? e() : window.breadbutterQueue.push(e) };
          injectBreadButter(function () {
              BreadButter.ui.contactUs({
              continue_with_position: {
                  bottom: '145px',
                  right: '120px',
              },
              show_phone: true,
              show_company_name: true,
              locale: {
                  "CONTACT_US": {
                      "ICON_NOTE": "Connect with a real person",
                      "HEADER": "Connect with a real person",
                      "TEXT_1": "Lets get started with your contact information",
                      "TEXT_2": "We only receive what is needed to get in touch with you",
                      "SUB_HEADER": "%FIRST_NAME%, how can we help?",
                      "MESSAGE_INPUT": "Let us know how we can help",
                      "BUTTON": "Send your message",
                      "SUCCESS":  "Thanks for reaching out %FIRST_NAME%. We'll get back to you as soon as possible."
                  }
              }
          });
          });
        `}
      </Script>
    </>
  )
}
