import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/fuche.jpg';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Kobin <span className="text-primary">Neupane</span>
					</h1>
					<p>
						Student | <span className="font-bold">Tribhuvan University IOST</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						I'm Kobin, a BSc. CSIT student at TU IOST and the owner of Binary SoftTech, a tech company I founded to provide top-notch software development and IT consulting services. When I'm not working on exciting new projects, I enjoy attending tech conferences and giving back to my community through volunteer work.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Kobin Neupane"
					className="object-cover w-auto h-32 md:w-32 md:h-auto"
					width={300}
					height={300}
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="DoB: 2003">
					2003
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: B+VE">
					B+VE
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 5 feet 8 and a half inches">
					<span>6'0</span>
				</div>
			</div>

			<Education />

			{/* <Projects /> */}

			<Inprogress />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:mail@kobin.com.np" className="italic underline text-primary">
							mail@kobin.com.np
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Bhaskar Rijal ' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>original template (open source)</a>
			</p>
		</div>
	);
};

export default Page;