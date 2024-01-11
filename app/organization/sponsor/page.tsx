"use client"

import Image from "next/legacy/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import AvatarOverLap from "@/components/home-page/avatar-overlap"
import { Icons } from "@/components/icons"
import BannerOrganization from "@/components/organization/banner"

const sponsorData = [
  {
    tier: "Diamond",
    price: "5000",
  },
  {
    tier: "Platinum",
    price: "1000",
  },
  {
    tier: "Gold",
    price: "500",
  },
  {
    tier: "Silver",
    price: "100",
  },
]

const SponsoringOrganizations = {
  organizations: [
    {
      title: "Sponsoring",
      items: [
        {
          name: "WebXDAO",
          url: "/organization/webxdao.png",
          description:
            "This is so good! I encourage everyone who is reading this right now to attend the events they host. Definitely helps people build career in tech - currently sponsoring this organization.",
        },
      ],
    },
  ],
}

const SponsorPage = () => {
  return (
    <div className="container mb-20">
      <BannerOrganization url="/organization/banner.png" />
      <div className="mr-6 flex justify-end md:mr-24">
        <div className="mr-3 mt-[-24px]">
          <AvatarOverLap
            size={44}
            url={"/organization/avatar.png"}
            option="black"
          />
        </div>
        <span className="mt-2 text-xs text-black dark:text-white sm:text-sm">
          1k+ people interested are in this event!
        </span>
      </div>
      <div className="flex flex-col px-2 md:px-10 lg:px-2 xl:flex-row">
        <div className="mr-0 flex flex-col md:mr-8 lg:mr-2">
          <h1 className="mt-10 text-2xl font-semibold">WebX Manilla</h1>
          <h3 className="mb-4 ml-2 text-xl">WebX Guild</h3>
          <div className="mx-2 flex flex-col justify-between sm:flex-row">
            <div className="flex items-start justify-start md:items-center md:justify-center">
              <Avatar className="mr-2 h-8 w-8">
                <AvatarImage
                  src={"/organization/avatar.png"}
                  alt="avatar image"
                />
                <AvatarFallback>{"GL"}</AvatarFallback>
              </Avatar>
              <span className="ml-1">
                1 sponsor has funded WebX Guild&apos;s event.
              </span>
            </div>
            <div className="mr-6 mt-4 sm:mt-0">
              <Button className="bg-violet-500">
                <Icons.plusSquare className="mr-2 h-4 w-4 shrink-0" />
                Save Event
              </Button>
            </div>
          </div>
          <div className="border-b-1 ml-[-4px] mt-6 w-[calc(100%-20px)] border" />
          <div className="mx-0 text-left md:mx-4">
            <h1 className="text-bold py-5 text-3xl font-medium tracking-wide">
              Welcome to WebX Guild - GitHub Sponsor
            </h1>
            <p className="mr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              auctor elit sed vulputate mi sit amet mauris commodo. Eu augue ut
              lectus arcu bibendum at varius vel. Faucibus pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae. Pharetra convallis
              posuere morbi leo urna molestie at. Neque gravida in fermentum et.
              Convallis tellus id interdum velit laoreet id donec ultrices
              tincidunt. Eu volutpat odio facilisis mauris sit amet massa. Sed
              turpis tincidunt id aliquet risus feugiat in ante metus.{" "}
            </p>
            <div className="mr-0 mt-20 rounded-lg border-2 border-gray-200 px-8 py-2 lg:mr-6">
              <h1 className="mb-8 ml-0 mt-4 text-2xl font-bold tracking-wide lg:ml-3">
                Meet the Team
              </h1>
              <div className="flex flex-col justify-between sm:flex-row">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="mb-8 mr-2 flex flex-col items-center justify-center sm:mb-0"
                  >
                    <Avatar className="h-40 w-40">
                      <AvatarImage
                        src={"/organization/avatar.png"}
                        alt="avatar image"
                      />
                      <AvatarFallback>{"GL"}</AvatarFallback>
                    </Avatar>
                    <div className="mt-2 text-xl font-bold sm:mt-6">
                      John Doe
                    </div>
                    <div className="mt-1 text-sm">Core Team</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-1 ml-[-6px] mt-20 flex w-[428px] flex-col rounded-xl border border-gray-200 p-6 sm:ml-0">
            <h1 className="mb-4 mt-1 text-3xl font-semibold">Sponsor Tier</h1>
            <p className="mb-2">
              Sponsor an event and you&apos;ll receive special badges!
            </p>
            {sponsorData.map((sponsorTier) => (
              <div className="mb-3 h-[76px] w-[378px] rounded-md bg-gray-200 p-3 text-black dark:bg-gray-200/20 dark:text-white">
                <div className="flex items-center">
                  <div className="flex flex-col pl-2">
                    <div className="text-md pb-1 font-bold">
                      {sponsorTier.tier} Tier <span>⭐</span>
                    </div>
                    <p className="text-sm">
                      {sponsorTier.price}{" "}
                      <span className="pl-[2px] text-xs">USD</span>
                    </p>
                  </div>
                  <div className="ml-auto mr-3 mt-1 flex items-center justify-center">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button
                          variant="link"
                          className="text-bg-300 text-lg underline"
                        >
                          <Icons.Info className="mr-2 h-6 w-6 text-gray-600 dark:text-white" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex space-x-8 pl-2 text-left">
                          <div className="space-y-1">
                            <div className="flex items-center justify-start">
                              <Icons.check className="mr-2 h-4 w-4" /> Logo on
                              Website, Banners
                            </div>
                            <div className="flex items-center justify-start">
                              <Icons.check className="mr-2 h-4 w-4" /> Dedicated
                              Post
                            </div>
                            <div className="flex items-center justify-start">
                              <Icons.check className="mr-2 h-4 w-4" /> Story
                              Promotion
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <Button className="rounded-md bg-violet-500 px-6 py-2 text-sm font-medium tracking-wide text-gray-200 hover:bg-violet-600 hover:text-gray-100">
                      Select
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            {SponsoringOrganizations.organizations.map((org, idx) => (
              <div key={idx}>
                <h1 className="mb-6 text-3xl font-bold tracking-wide">
                  {org.title}
                </h1>
                {org.items.map((item, innerIdx) => (
                  <div
                    className="border-1 rounded-md border border-gray-200 p-4"
                    key={innerIdx}
                  >
                    <div className="flex items-center">
                      <Image
                        alt={"webxdao"}
                        src={item.url}
                        width={54}
                        height={48}
                      />
                      <span className="ml-4 mt-1 text-2xl font-bold">
                        {item.name}
                      </span>
                    </div>
                    <p className="mb-2 mt-3 px-4 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorPage
