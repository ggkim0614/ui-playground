'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Bell,
  Bookmark,
  SquarePen,
  Plus,
  Menu,
  ChevronLeft,
  ChevronRight,
  Settings,
  ScanLine,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [isToggled, setIsToggled] = useState(false)
  const [isCardActive, setIsCardActive] = useState(false)

  const handleClick = () => {
    setIsToggled(!isToggled)
    console.log(isToggled)
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 text-3xl">
      <div className="w-full max-w-[600px]">
        <div className="mb-16 mt-6 ">
          <span className="flex items-center gap-3">
            <h2 className="font-semibold tracking-tight text-gray-900">
              UI Playground
            </h2>
            <div className="flex items-center gap-1 rounded-md bg-blue-200 px-2 py-1 text-xs  font-semibold text-blue-500">
              <motion.div
                animate={{
                  scale: [1.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="h-1 w-1 rounded-full bg-blue-500"
              />
              BETA
            </div>
          </span>
          <p className="text-base tracking-tight text-gray-600">
            Shelter for my experimental prototypes.
          </p>
        </div>

        <section className="mb-24 items-center justify-center">
          <div className="pb-8">
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              Wallet App
            </div>
            <div className="mb-4 text-sm tracking-tight text-slate-700">
              Click the last card in the stack to see it move in spring motion.
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                React
              </div>
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                Framer Motion
              </div>
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                Tailwind
              </div>
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                Shadcn
              </div>
            </div>
          </div>
          <div className="flex h-[1000px] w-full items-center justify-center rounded-md border bg-white">
            <div className="relative h-[852px] w-[393px] overflow-hidden rounded-[36px] bg-gray-900">
              <motion.div className="div" layoutId="status-bar">
                <Image
                  src="/static/images/Status Bar.png"
                  width={393}
                  height={54}
                  alt="Picture of the author"
                  className="mb-11"
                />
              </motion.div>
              <div className=" w-full px-6">
                <div className="mb-6 flex h-full w-full items-center justify-between">
                  <Input
                    className="w-[240px] rounded-[14px] border border-slate-600 bg-gray-700 text-lg text-blue-200"
                    type="text"
                    placeholder="Search"
                  ></Input>

                  <Button
                    className="rounded-[14px] hover:bg-gray-800"
                    variant="ghost"
                    size="icon"
                  >
                    <Bell className="w-6 text-gray-500" />
                  </Button>
                  <Avatar className="w-10 cursor-pointer transition-opacity hover:opacity-80">
                    <AvatarImage
                      src="https://pbs.twimg.com/profile_images/1739171217431732224/8BG3LGat_400x400.jpg"
                      alt="@george_kim"
                    />
                    <AvatarFallback>GK</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mb-6 flex items-center gap-4">
                  <Button className="h-[56px] w-full rounded-[14px] bg-gray-700 text-lg tracking-tight hover:bg-gray-600">
                    Send Money
                  </Button>
                  <Button className="h-[56px] w-full rounded-[14px] bg-gray-700 text-lg tracking-tight hover:bg-gray-600">
                    hello world
                  </Button>
                </div>
                <div className="mb-6 flex w-full items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="text-[20px] font-medium tracking-tight text-white">
                      My Cards
                    </div>
                    <div className="rounded-md bg-green-800 px-2 py-1 text-sm font-medium tracking-tight text-green-300">
                      5 Active
                    </div>
                  </span>

                  <span className="flex items-center">
                    <Button
                      className="rounded-[14px] hover:bg-gray-800"
                      variant="ghost"
                      size="icon"
                    >
                      <Plus className="w-6 text-gray-500" />
                    </Button>
                    <Button
                      className="rounded-[14px] hover:bg-gray-800"
                      variant="ghost"
                      size="icon"
                    >
                      <Menu className="w-6 text-gray-500" />
                    </Button>
                  </span>
                </div>
                <div className="relative mb-9 h-[366px]">
                  <Image
                    src="/static/images/Kakao.png"
                    width={345}
                    height={221}
                    alt="Kakao"
                    className="absolute translate-y-[108px] rounded-[18px] shadow-sm"
                    style={{
                      boxShadow:
                        '0px 8px 8px 0 rgba(0,0,0,0.1), 0px 4px 4px 0 rgba(0,0,0,0.1), 0px 2px 2px 0 rgba(0,0,0,0.1)',
                    }}
                  />
                  <Image
                    src="/static/images/BOA.png"
                    width={345}
                    height={221}
                    alt="Boa"
                    className="absolute translate-y-[72px] rounded-[18px] shadow-sm"
                    style={{
                      boxShadow:
                        '0px 8px 8px 0 rgba(0,0,0,0.1), 0px 4px 4px 0 rgba(0,0,0,0.1), 0px 2px 2px 0 rgba(0,0,0,0.1)',
                    }}
                  />
                  <Image
                    src="/static/images/Apple.png"
                    width={345}
                    height={221}
                    alt="Apple"
                    className="absolute rounded-[18px] shadow-sm"
                    style={{
                      boxShadow:
                        '0px 8px 8px 0 rgba(0,0,0,0.1), 0px 4px 4px 0 rgba(0,0,0,0.1), 0px 2px 2px 0 rgba(0,0,0,0.1)',
                    }}
                  />

                  <Image
                    src="/static/images/AMEX.png"
                    width={345}
                    height={221}
                    alt="Amex"
                    className="absolute translate-y-[36px] rounded-[18px] shadow-sm"
                    style={{
                      boxShadow:
                        '0px 8px 8px 0 rgba(0,0,0,0.1), 0px 4px 4px 0 rgba(0,0,0,0.1), 0px 2px 2px 0 rgba(0,0,0,0.1)',
                    }}
                  />

                  <motion.div
                    layoutId="chase-card"
                    className="absolute cursor-pointer shadow-sm"
                    onClick={() => setIsCardActive((s) => !s)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src="/static/images/Chase.png"
                      width={345}
                      height={221}
                      alt="Chase"
                      className="pointer-events-none select-none rounded-[18px]"
                    />
                  </motion.div>
                </div>
                <div className="mb-6 flex w-full items-center justify-between">
                  <span className="flex items-center gap-3">
                    <div className="text-[20px] font-medium tracking-tight text-white">
                      Memberships
                    </div>
                    <div className="rounded-md bg-green-800 px-2 py-1 text-sm font-medium tracking-tight text-green-300">
                      3 Active
                    </div>
                  </span>
                  <span className="flex items-center">
                    <Button
                      className="rounded-[14px] hover:bg-gray-800"
                      variant="ghost"
                      size="icon"
                    >
                      <Plus className="w-6 text-gray-500 " />
                    </Button>
                    <Button
                      className="rounded-[14px] hover:bg-gray-800"
                      variant="ghost"
                      size="icon"
                    >
                      <Menu className="w-6 text-gray-500" />
                    </Button>
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-sky-500 to-indigo-500" />
                      <span>
                        <p className="text-base font-medium text-white">
                          Jiwon Choi
                        </p>
                        <p className="text-sm text-gray-300">Transfer</p>
                      </span>
                    </div>
                    <Button>Scan</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                      <span>
                        <p className="text-base font-medium text-white">
                          Kodachaya
                        </p>
                        <p className="text-sm text-gray-300">Debit</p>
                      </span>
                    </div>
                    <span className="flex items-center gap-2">
                      <p className="text-base font-medium text-white">$87.52</p>
                      <ChevronRight className="text-gray-600" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-purple-500 to-pink-500" />
                      <span>
                        <p className="text-base font-medium text-white">
                          Kevin Yang
                        </p>
                        <p className="text-sm text-gray-300">Transfer</p>
                      </span>
                    </div>
                    <span className="flex items-center gap-2">
                      <p className="text-base font-medium text-white">$50.00</p>
                      <ChevronRight className="text-gray-600" />
                    </span>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {isCardActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="absolute inset-0 h-full w-full bg-gray-900"
                  ></motion.div>
                ) : null}
              </AnimatePresence>
              <AnimatePresence>
                {isCardActive ? (
                  <motion.div className="absolute top-0 z-10 m-0 h-full ">
                    <motion.div className="" layoutId="status-bar">
                      <Image
                        src="/static/images/Status Bar.png"
                        width={393}
                        height={54}
                        alt="Picture of the author"
                        className="mb-11"
                      />
                    </motion.div>
                    <div className=" w-full px-6">
                      <motion.div
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="mb-6 flex w-full items-center justify-between"
                      >
                        <span className="flex items-center gap-3">
                          <Button
                            className="rounded-[14px] hover:bg-gray-800"
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsCardActive((s) => !s)}
                          >
                            <ChevronLeft className="w-6 text-gray-500" />
                          </Button>
                          <div className="text-[20px] font-medium tracking-tight text-white">
                            Chase Debit
                          </div>
                          <div className="rounded-md bg-green-800 px-2 py-1 text-sm font-medium tracking-tight text-green-300">
                            Active
                          </div>
                        </span>

                        <span className="flex items-center">
                          <Button
                            className="rounded-[14px] hover:bg-gray-800"
                            variant="ghost"
                            size="icon"
                          >
                            <Settings className="w-6 text-gray-500" />
                          </Button>
                        </span>
                      </motion.div>

                      <motion.div
                        layoutId="chase-card"
                        className="mb-6 cursor-pointer"
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: 'spring',
                          duration: 0.5,
                          bounce: 0.3,
                        }}
                        onClick={() => setIsCardActive((s) => !s)}
                      >
                        <Image
                          src="/static/images/Chase.png"
                          width={361}
                          height={232}
                          alt="Chase"
                          className="pointer-events-none select-none rounded-[18px]"
                          style={{
                            boxShadow:
                              '0px 8px 8px 0 rgba(0,0,0,0.1), 0px 4px 4px 0 rgba(0,0,0,0.1), 0px 2px 2px 0 rgba(0,0,0,0.1)',
                          }}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.25 } }}
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="mb-6"
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className="h-[56px] w-full rounded-[14px] bg-gray-700 text-lg tracking-tight hover:bg-gray-600"
                          style={{
                            boxShadow:
                              '0px 8px 8px 0 rgba(0,0,0,0.1), 0px 4px 4px 0 rgba(0,0,0,0.1), 0px 2px 2px 0 rgba(0,0,0,0.1)',
                          }}
                        >
                          <ScanLine className="mr-2 h-4 w-4 text-gray-400" />{' '}
                          Scan to Pay
                        </Button>
                      </motion.div>

                      <motion.div
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="mb-6 flex w-full items-center justify-between"
                      >
                        <span className="flex items-center">
                          <div className="text-[20px] font-medium tracking-tight text-white">
                            Transactions
                          </div>
                        </span>
                        <span className="flex items-center">
                          <Select>
                            <SelectTrigger className="h-[30px] w-[94px] rounded-[12px] border-gray-700 bg-gray-700 text-gray-200">
                              <SelectValue placeholder="Recent" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="credit">Credit</SelectItem>
                              <SelectItem value="debit">Debit</SelectItem>
                              <SelectItem value="transfer">Transfer</SelectItem>
                            </SelectContent>
                          </Select>
                        </span>
                      </motion.div>
                      <motion.div
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="flex flex-col gap-6"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-cyan-500 to-blue-500" />
                            <span>
                              <p className="text-base font-medium text-white">
                                Starbucks
                              </p>
                              <p className="text-sm text-gray-300">Debit</p>
                            </span>
                          </div>
                          <span className="flex items-center gap-2">
                            <p className="text-base font-medium text-white">
                              $6.43
                            </p>
                            <ChevronRight className="text-gray-600" />
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-sky-500 to-indigo-500" />
                            <span>
                              <p className="text-base font-medium text-white">
                                Jiwon Choi
                              </p>
                              <p className="text-sm text-gray-300">Transfer</p>
                            </span>
                          </div>
                          <span className="flex items-center gap-2">
                            <p className="text-base font-medium text-white">
                              $25.00
                            </p>
                            <ChevronRight className="text-gray-600" />
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                            <span>
                              <p className="text-base font-medium text-white">
                                Kodachaya
                              </p>
                              <p className="text-sm text-gray-300">Debit</p>
                            </span>
                          </div>
                          <span className="flex items-center gap-2">
                            <p className="text-base font-medium text-white">
                              $87.52
                            </p>
                            <ChevronRight className="text-gray-600" />
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="pointer-events-none h-10 w-10 select-none rounded-[12px] bg-gradient-to-r from-purple-500 to-pink-500" />
                            <span>
                              <p className="text-base font-medium text-white">
                                Kevin Yang
                              </p>
                              <p className="text-sm text-gray-300">Transfer</p>
                            </span>
                          </div>
                          <span className="flex items-center gap-2">
                            <p className="text-base font-medium text-white">
                              $50.00
                            </p>
                            <ChevronRight className="text-gray-600" />
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </section>
        <section className="mb-8 items-center justify-center">
          <div className="pb-8">
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              Dynamic Dock
            </div>
            <div className="mb-4 text-sm tracking-tight text-slate-700">
              Floating dock with changing orientation
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                React
              </div>
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                Framer Motion
              </div>
              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                Tailwind
              </div>

              <div className="rounded-md bg-slate-200 px-2 py-1 font-mono text-xs text-slate-600">
                Shadcn
              </div>
            </div>
          </div>
          <div className="flex h-[400px] w-full items-center justify-center rounded-md border bg-gray-50">
            <motion.div
              layout
              style={
                isToggled
                  ? { flexDirection: 'column' }
                  : { flexDirection: 'row' }
              }
              className="flex items-center gap-6 rounded-[24px] border-[1px] bg-white p-2"
            >
              <motion.div layoutId="avatar">
                <Avatar className="w-[40px] cursor-pointer transition-opacity hover:opacity-80">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </motion.div>
              <motion.div layoutId="bookmark">
                <Button variant="ghost" size="icon">
                  <Bookmark className="w-6" />
                </Button>
              </motion.div>
              <motion.div layoutId="notif">
                <Button className="" variant="ghost" size="icon">
                  <Bell className="w-6" />
                </Button>
              </motion.div>
              <motion.div layoutId="button">
                <Button
                  onClick={handleClick}
                  className="rounded-[12px] text-[14px] font-semibold"
                >
                  <motion.div layoutId="btn-icon">
                    <SquarePen
                      className="w-4 opacity-60"
                      style={
                        isToggled ? { marginRight: 0 } : { marginRight: 6 }
                      }
                    />
                  </motion.div>

                  <div
                    style={
                      isToggled ? { display: 'none' } : { display: 'block' }
                    }
                  >
                    Write
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <footer className="flex w-full items-center justify-between py-8">
          <div className="text-sm text-gray-500">Built with Next.js</div>
          <div className="text-sm text-gray-500">©George Kim, 2024</div>
        </footer>
      </div>
    </div>
  )
}
