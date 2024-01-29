import React from "react";
//import * as React from 'react';
//import { LineChart } from '@mui/x-charts/LineChart';

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";


import { Button, Img, Line, List, SelectBox, Text } from "components";
import { GrowthChart } from "components/GrowthChart/GrowthChart";

const sortByNewestOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const yearlyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-4 w-4"
          //src="images/img_arrowdown.svg"
          src="images/img_iconfromtablerio_gray_600.svg"
          alt="iconfromtableri_One"
        />
      ),
      label: "Customers",
    },
    {
      icon: (
        <Img
          className="h-4 w-4"
          src="images/img_iconfromtablerio_gray_600_16x16.svg"
          alt="iconfromtableri_One"
        />
      ),
      label: "All reports",
    },
    {
      icon: (
        <Img
          className="h-4 w-4"
          src="images/img_iconfromtablerio_16x16.svg"
          alt="iconfromtableri_Two"
        />
      ),
      label: "Geography",
    },
    {
      icon: (
        <Img className="h-4 w-4" src="images/img_qrcode.svg" alt="qrcode" />
      ),
      label: "Conversations",
    },
    {
      icon: (
        <Img
          className="h-4 w-4"
          src="images/img_iconfromtablerio.svg"
          alt="iconfromtableri_Three"
        />
      ),
      label: "Deals",
    },
    {
      icon: (
        <Img className="h-4 w-4" src="images/img_settings.svg" alt="settings" />
      ),
      label: "Export",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter gap-4 items-start justify-start mx-auto p-4 w-auto sm:w-full md:w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
        >
          <Menu
            menuItemStyles={{
              button: {
                padding: "8px",
                gap: "12px",
                color: "#131313",
                fontSize: "14px",
                borderColor: "transparent",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "20px",
                [`&:hover, &.ps-active`]: {
                  color: "#7d7d7d",
                  fontWeight: "400 !important",
                  borderColor: "#f1f1f1ff",
                  backgroundColor: "#ffffffff !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mb-[35px] pt-[11px] px-5 w-[86%]"
          >
            <div className="sm:h-[393px] md:h-[449px] h-[710px] relative w-full">
              <div className="absolute flex flex-col gap-2 h-max inset-[0] items-center justify-center m-auto pb-3 pt-4 sm:px-5 px-6 w-60">
                <Img
                  className="h-10 relative w-60"
                  src="images/img_logo.svg"
                  alt="logo"
                />
                <div className="bg-gray-100 flex flex-col h-2 md:h-auto items-center justify-center p-1 rounded w-60">
                  <div className="bg-gray-100 flex flex-col items-center justify-start pt-[3px] rotate-[-90deg] rounded-[1px] w-full">
                    <Img
                      className="h-px rounded-tl-[1px] rounded-tr-[1px]"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-2 h-full inset-x-[0] items-center justify-start mx-auto p-2 w-full">
                <MenuItem>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row gap-2 items-center justify-start px-4 py-3 w-full">
                      <Img
                        className="h-4 w-4"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                      <Text className="tracking-[-0.25px] w-auto">Search</Text>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-4 w-4"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  active={window.location.pathname === "/"}
                  href="/"
                >
                  <Text className="flex-1 my-[3px] tracking-[-0.25px] w-auto">
                    Dashboard
                  </Text>
                </MenuItem>
                
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-3 h-[41px] md:h-auto items-center justify-start px-5 py-3 rounded-[20px] w-60">
                    <Img
                      className="h-4 w-60"
                      src="images/img_iconfromtablerio_gray_600.svg"
                      alt="iconfromtableri"
                    />
                    <Text className="flex-1 tracking-[-0.25px] w-auto">
                      Customers
                    </Text>
                    <Img
                      className="h-4 w-60"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-3 h-10 md:h-auto items-center justify-start mt-[22px] px-5 w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[62px] md:h-auto rounded-[50%] w-full"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />
              </div>
              <div className="flex flex-1 md:flex-1 flex-col gap-1 items-start justify-center w-auto md:w-full">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.25px] w-auto"
                  size="txtInterMedium14"
                >
                  Gustavo Xavier
                </Text>
                <Text
                  className="bg-orange-200 justify-center px-1.5 rounded-lg text-[10px] text-gray-900 tracking-[-0.50px] w-auto"
                  size="txtInterRegular10"
                >
                  Admin
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end mt-3 w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-4 w-4"
                    src="images/img_user_gray_600.svg"
                    alt="user_One"
                  />
                }
              >
                <Text className="flex-1 my-[3px] tracking-[-0.25px] w-auto">
                  Settings
                </Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-4 w-4"
                    src="images/img_television.svg"
                    alt="television"
                  />
                }
              >
                <Text className="flex-1 my-[3px] text-red-900 tracking-[-0.25px] w-auto">
                  Log out
                </Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-4 h-[120%] items-start justify-start md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-4 h-[261px] md:h-auto items-start justify-start w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 w-[76%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col gap-2 h-full items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start pb-4 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                  >
                    Revenues
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-2.00px] w-auto"
                    size="txtInterMedium48"
                  >
                    15%
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
                <Text
                  className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                  size="txtInterRegular14Gray800"
                >
                  Increase compared to last week
                </Text>
                <div className="flex flex-col h-[74px] md:h-auto items-end justify-start pt-4 w-auto">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                      size="txtInterRegular14Lime900"
                    >
                      Revenues report
                    </Text>
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_arrowleft_lime_900.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2 h-full items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start pb-4 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                  >
                    Lost deals
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-2.00px] w-auto"
                    size="txtInterMedium48"
                  >
                    4%
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                  size="txtInterRegular14Gray800"
                >
                  You closed 96 out of 100 deals
                </Text>
                <div className="flex flex-col h-[74px] md:h-auto items-end justify-start pt-4 w-auto">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                      size="txtInterRegular14Lime900"
                    >
                      All deals
                    </Text>
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_arrowleft_lime_900.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-white-A700 flex flex-col gap-2 h-[261px] md:h-auto items-center justify-start p-6 sm:px-5 rounded-[16px] w-[260px]">
              <div className="flex flex-col items-start justify-center pb-4 w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                  size="txtInterSemiBold20"
                >
                  Quarter goal
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[102px] relative w-full">
                  <Img
                    className="absolute h-[102px] inset-[0] justify-center m-auto"
                    src="images/img_ellipse3.svg"
                    alt="ellipseThree"
                  />
                  <Img
                    className="absolute bottom-[0] h-[69px] left-[0]"
                    src="images/img_settings_blue_gray_100.svg"
                    alt="settings_One"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-end left-[0] my-auto pt-[51px] md:px-10 sm:px-5 px-[51px]"
                    style={{ backgroundImage: "url('images/img_group1.svg')" }}
                  >
                    <Text
                      className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[-1.59px]"
                      size="txtInterMedium32"
                    >
                      84%
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[55px] md:h-auto items-center justify-end pt-3 w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                    size="txtInterRegular14Lime900"
                  >
                    All goals
                  </Text>
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_arrowleft_lime_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
            <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[400px] md:h-auto items-start justify-start py-6 rounded-[16px] w-full">
              <div className="flex flex-row gap-2 items-center justify-between sm:px-5 px-6 w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                  size="txtInterSemiBold20"
                >
                  Customers
                </Text>
                <SelectBox
                  className="sm:flex-1 leading-[normal] text-gray-800 text-left text-sm tracking-[-0.30px] w-[24%] sm:w-full"
                  placeholderClassName="text-gray-800"
                  indicator={
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frameFive"
                  options={sortByNewestOptionsList}
                  isSearchable={false}
                  placeholder="Sort by Newest"
                />
              </div>
              <div className="flex flex-col h-full items-start justify-start px-2 w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start p-4 w-full">
                  <div className="flex flex-col h-8 items-center justify-start w-8">
                    <Img
                      className="h-8 md:h-auto rounded-[50%] w-8"
                      src="images/img_rectangle1_32x32.png"
                      alt="rectangleOne_One"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                    <Text
                      className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                      size="txtInterMedium14"
                    >
                      Chris Friedkly
                    </Text>
                    <Text
                      className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                      size="txtInterRegular12"
                    >
                      Supermarket Villanova
                    </Text>
                  </div>
                </div>
                <div className="bg-yellow-50 flex sm:flex-col flex-row gap-3 items-center justify-start p-4 rounded-[16px] w-full">
                  <div className="flex flex-col h-8 items-center justify-start w-8">
                    <Img
                      className="h-8 md:h-auto rounded-[50%] w-8"
                      src="images/img_rectangle1_1.png"
                      alt="rectangleOne_Two"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                    <Text
                      className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                      size="txtInterMedium14"
                    >
                      Maggie Johnson
                    </Text>
                    <Text
                      className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                      size="txtInterRegular12"
                    >
                      Oasis Organic Inc.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <List
                      className="sm:flex-col flex-row gap-1 grid grid-cols-3 justify-start w-auto"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col h-9 md:h-auto items-center justify-center w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                      </div>
                      <div className="flex flex-col h-9 md:h-auto items-center justify-center w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                      </div>
                      <div className="flex flex-col h-9 md:h-auto items-center justify-center w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_edit.svg"
                          alt="edit"
                        />
                      </div>
                    </List>
                    <Line className="bg-lime-900_6c h-6 w-px" />
                    <div className="flex flex-col h-9 md:h-auto items-center justify-center w-9">
                      <Img
                        className="h-4 w-4"
                        src="images/img_iconfromtablerio_gray_900.svg"
                        alt="iconfromtableri_Four"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-4 w-full">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <Img
                        className="h-8 md:h-auto rounded-[50%] w-8"
                        src="images/img_rectangle1_2.png"
                        alt="rectangleOne"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                      <Text
                        className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                        size="txtInterMedium14"
                      >
                        Gael Harry
                      </Text>
                      <Text
                        className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                        size="txtInterRegular12"
                      >
                        New York Finest Fruits
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start p-4 w-full">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <Img
                        className="h-8 md:h-auto rounded-[50%] w-8"
                        src="images/img_rectangle1_3.png"
                        alt="rectangleOne"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-center w-full">
                      <Text
                        className="text-gray-900 text-sm tracking-[-0.30px] w-auto"
                        size="txtInterMedium14"
                      >
                        Jenna Sullivan
                      </Text>
                      <Text
                        className="text-gray-800 text-xs tracking-[-0.30px] w-auto"
                        size="txtInterRegular12"
                      >
                        Walmart
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-end justify-start sm:px-5 px-6 w-full">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                    size="txtInterRegular14Lime900"
                  >
                    All customers
                  </Text>
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_arrowleft_lime_900.svg"
                    alt="arrowleft_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 h-[400px] md:h-auto items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-row gap-2 items-center justify-between pb-4 w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                    size="txtInterSemiBold20"
                  >
                    Growth
                  </Text>
                  <SelectBox
                    className="sm:flex-1 leading-[normal] text-gray-800 text-left text-sm tracking-[-0.30px] w-[12%] sm:w-full"
                    placeholderClassName="text-gray-800"
                    indicator={
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frameFive_One"
                    options={yearlyOptionsList}
                    isSearchable={false}
                    placeholder="Yearly"
                  />

                </div>
                <div className="h-[170px] sm:h-[174px] relative w-full">
                    <GrowthChart/>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 h-[100px] justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[90%] items-start justify-start p-4 rounded-[16px] w-full">
                  <Text
                    className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                    size="txtInterSemiBold16"
                  >
                    Top month
                  </Text>
                  <div className="flex flex-col h-full items-start justify-end w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-lime-900 sm:text-xl tracking-[-0.20px] w-auto"
                      size="txtInterSemiBold24"
                    >
                      November
                    </Text>
                    <Text
                      className="text-amber-700 text-base tracking-[-0.20px] w-auto"
                      size="txtInterMedium16"
                    >
                      2019
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[90%] items-start justify-start p-4 rounded-[16px] w-full">
                  <Text
                    className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                    size="txtInterSemiBold16"
                  >
                    Top year
                  </Text>
                  <div className="flex flex-col gap-1 h-full items-start justify-end w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-lime-900 sm:text-xl tracking-[-0.20px] w-auto"
                      size="txtInterSemiBold24"
                    >
                      2023
                    </Text>
                    <Text
                      className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                      size="txtInterRegular14Gray800"
                    >
                      96K sold so far
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-[90%] items-start justify-start p-4 rounded-[16px] w-full">
                  <Text
                    className="text-base text-gray-600 tracking-[-0.40px] w-auto"
                    size="txtInterSemiBold16"
                  >
                    Top buyer
                  </Text>
                  <div className="flex flex-col gap-2 h-full items-start justify-end w-full">
                    <div className="flex flex-col h-6 items-center justify-start w-6">
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="images/img_rectangle1_24x24.png"
                        alt="rectangleOne"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center w-full">
                      <Text
                        className="text-gray-900 text-xs tracking-[-0.30px] w-auto"
                        size="txtInterMedium12"
                      >
                        Maggie Johnson
                      </Text>
                      <Text
                        className="text-[10px] text-gray-800 tracking-[-0.30px] w-auto"
                        size="txtInterRegular10Gray800"
                      >
                        Oasis Organic Inc.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bottom-4 flex md:flex-col flex-row gap-4 items-start justify-start w-full">
            <div className="bg-white-A700 flex flex-col gap-2 h-64 md:h-auto items-start justify-start p-6 sm:px-5 rounded-[16px]">
              <div className="flex flex-col gap-2 items-start justify-start pb-4 w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                  size="txtInterSemiBold20"
                >
                  Chats
                </Text>
                <Text
                  className="text-gray-800 text-sm tracking-[-0.30px] w-auto"
                  size="txtInterRegular14Gray800"
                >
                  2 unread messages
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[45%]"
                  orientation="horizontal"
                >
                  <div className="bg-yellow-50 flex flex-col items-center justify-start p-3 rounded-[16px] w-full">
                    <div className="relative w-8">
                      <Img
                        className="h-8 m-auto rounded-[50%] w-8"
                        src="images/img_rectangle1_1.png"
                        alt="rectangleOne"
                      />
                      <div className="absolute bg-red-400 h-1 outline outline-[2px] outline-yellow-50 right-[6%] rounded-[50%] top-[9%] w-1"></div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 flex flex-col items-center justify-start p-3 rounded-[16px] w-full">
                    <div className="relative w-8">
                      <Img
                        className="h-8 m-auto rounded-[50%] w-8"
                        src="images/img_rectangle1_4.png"
                        alt="rectangleOne"
                      />
                      <div className="absolute bg-red-400 h-1 outline outline-[2px] outline-yellow-50 right-[6%] rounded-[50%] top-[9%] w-1"></div>
                    </div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[45%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start p-3 w-full">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <Img
                        className="h-8 md:h-auto rounded-[50%] w-8"
                        src="images/img_rectangle1_5.png"
                        alt="rectangleOne"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 w-full">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <Img
                        className="h-8 md:h-auto rounded-[50%] w-8"
                        src="images/img_rectangle1_6.png"
                        alt="rectangleOne"
                      />
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col h-[71px] md:h-auto items-end justify-start pt-4 w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-lime-900 text-sm tracking-[-0.30px] w-auto"
                    size="txtInterRegular14Lime900"
                  >
                    All messages
                  </Text>
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_arrowleft_lime_900.svg"
                    alt="arrowleft_Two"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-2 h-64 md:h-auto items-start justify-start p-6 sm:px-5 rounded-[16px]">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                  size="txtInterSemiBold20"
                >
                  Top states
                </Text>
              </div>
              <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-full">
                <Text
                  className="text-gray-900 text-sm uppercase w-auto"
                  size="txtInterSemiBold14"
                >
                  NY
                </Text>
                <Text
                  className="text-[10px] text-gray-900 text-right uppercase w-auto"
                  size="txtInterMedium10Gray900"
                >
                  120k
                </Text>
              </div>
              <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-[229px]">
                <Text
                  className="text-gray-900 text-sm uppercase w-auto"
                  size="txtInterSemiBold14"
                >
                  MA
                </Text>
                <Text
                  className="text-[10px] text-gray-900 text-right uppercase w-auto"
                  size="txtInterMedium10Gray900"
                >
                  80k
                </Text>
              </div>
              <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-[207px]">
                <Text
                  className="text-gray-900 text-sm uppercase w-auto"
                  size="txtInterSemiBold14"
                >
                  NH
                </Text>
                <Text
                  className="text-[10px] text-gray-900 text-right uppercase w-auto"
                  size="txtInterMedium10Gray900"
                >
                  70k
                </Text>
              </div>
              <div className="bg-gradient  flex flex-row gap-2 items-start justify-center px-2 py-1.5 rounded w-[150px]">
                <Text
                  className="text-gray-900 text-sm uppercase w-auto"
                  size="txtInterSemiBold14"
                >
                  OR
                </Text>
                <Text
                  className="text-[10px] text-gray-900 text-right uppercase w-auto"
                  size="txtInterMedium10Gray900"
                >
                  50k
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2 h-full items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.20px] w-auto"
                  size="txtInterSemiBold20"
                >
                  New deals
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[99%]">
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[116px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        Fruit2Go
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[157px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        <>Marshall&#39;s MKT</>
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[99px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        CCNT
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-[94%] md:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[179px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        Joana Mini-market
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[174px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        Little Brazil Vegan
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[102px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        Target
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[148px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        Organic Place
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[117px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_icon_from_tablerio_amber_700.svg"
                          alt="Icon (from Tabler.io)"
                        />
                      }
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.30px]">
                        <>Morello&#39;s</>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
