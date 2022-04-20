import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPageLayout from "./components/DashboardPageLayout";
import HeaderPageLayout from "./components/HeaderPageLayout";
import InformationPage from "./pages/dashboard/information";
import PrivacyPage from "./pages/dashboard/privacy";
import ListPage from "./pages/dashboard/list";
import PageLayout from "./components/PageLayout";
import App from "./App";
import NewUserPage from "./pages/dashboard/newuser";
import LoginPage from "./pages/login";
import TradePage from "./pages/dashboard/trade";
import OverviewPage from "./pages/dashboard/overview";
import SystemPage from "./pages/dashboard/system";
import OrdersPage from "./pages/dashboard/order";
import OverviewStockPage from "./pages/dashboard/overview-stock";
import ChangePasswordPage from "./pages/dashboard/changepass";
import EmailPage from "./pages/enter-email"

export const URLS = {
	DASHBOARD: {
		INDEX: "/",
		INFORMATION: "information",
		PRIVACY: "privacy",
		LIST: {
			INDEX: "list",
			NEW_USER: "list/new-user",
		},
		CHANGEPASSWORD: "changepassword",
		OVERVIEW: {
			INDEX: "view",
			STOCK: "view/:id",
		},
		TRADE: "trade",
		ORDERS: "orders",
		SYSTEM: "system",
	},
	LOGIN: "login",
	REGISTER: "register",
	EMAIL: "email"
};

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route element={<HeaderPageLayout />}>
						<Route
							path={URLS.DASHBOARD.INDEX}
							element={<OverviewPage />}
						/>
					</Route>
					<Route element={<DashboardPageLayout />}>
						<Route
							path={URLS.DASHBOARD.INFORMATION}
							element={<InformationPage />}
						/>
						<Route
							path={URLS.DASHBOARD.PRIVACY}
							element={<PrivacyPage />}
						/>
					</Route>
					<Route element={<HeaderPageLayout />}>
						<Route
							path={URLS.DASHBOARD.LIST.INDEX}
							element={<ListPage />}
						/>
						<Route
							path={URLS.DASHBOARD.LIST.NEW_USER}
							element={<NewUserPage />}
						/>
						<Route
							path={URLS.DASHBOARD.TRADE}
							element={<TradePage />}
						/>
						<Route
							path={URLS.DASHBOARD.OVERVIEW.INDEX}
							element={<OverviewPage />}
						></Route>
						<Route
							path={URLS.DASHBOARD.OVERVIEW.STOCK}
							element={<OverviewStockPage />}
						/>
						<Route
							path={URLS.DASHBOARD.ORDERS}
							element={<OrdersPage />}
						/>
						<Route
							path={URLS.DASHBOARD.SYSTEM}
							element={<SystemPage />}
						/>
						<Route
							path={URLS.DASHBOARD.CHANGEPASSWORD}
							element={<ChangePasswordPage />}
						/>
					</Route>
					<Route element={<PageLayout />}>
						<Route path={URLS.LOGIN} element={<LoginPage />} />
					</Route>
					<Route element={<PageLayout />}>
						<Route path={URLS.EMAIL} element={<EmailPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}