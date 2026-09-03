/* @ds-bundle: {"format":4,"namespace":"RapidoDesignSystem_ef9315","components":[{"name":"BadgeCancelled","sourcePath":"components/badges/BadgeCancelled.jsx"},{"name":"BadgeCompleted","sourcePath":"components/badges/BadgeCompleted.jsx"},{"name":"BadgeOngoing","sourcePath":"components/badges/BadgeOngoing.jsx"},{"name":"ButtonPrimary","sourcePath":"components/buttons/ButtonPrimary.jsx"},{"name":"ButtonSecondary","sourcePath":"components/buttons/ButtonSecondary.jsx"},{"name":"ButtonSmall","sourcePath":"components/buttons/ButtonSmall.jsx"},{"name":"ButtonText","sourcePath":"components/buttons/ButtonText.jsx"},{"name":"CardBooking","sourcePath":"components/cards/CardBooking.jsx"},{"name":"CardEarnings","sourcePath":"components/cards/CardEarnings.jsx"},{"name":"CardProfileHeader","sourcePath":"components/cards/CardProfileHeader.jsx"},{"name":"CardStat","sourcePath":"components/cards/CardStat.jsx"},{"name":"HomeIndicatorDark","sourcePath":"components/chrome/HomeIndicatorDark.jsx"},{"name":"StatusBar","sourcePath":"components/chrome/StatusBar.jsx"},{"name":"StatusBarBattery","sourcePath":"components/chrome/StatusBarBattery.jsx"},{"name":"StatusBarDynamicIsland","sourcePath":"components/chrome/StatusBarDynamicIsland.jsx"},{"name":"StatusBarTime","sourcePath":"components/chrome/StatusBarTime.jsx"},{"name":"InputSearch","sourcePath":"components/forms/InputSearch.jsx"},{"name":"ListItemNotification","sourcePath":"components/lists/ListItemNotification.jsx"},{"name":"ListItemTransaction","sourcePath":"components/lists/ListItemTransaction.jsx"},{"name":"ChatBackground","sourcePath":"components/messaging/ChatBackground.jsx"},{"name":"IconAttachment","sourcePath":"components/messaging/IconAttachment.jsx"},{"name":"IconAudioCall","sourcePath":"components/messaging/IconAudioCall.jsx"},{"name":"IconCamera","sourcePath":"components/messaging/IconCamera.jsx"},{"name":"IconMicrophone","sourcePath":"components/messaging/IconMicrophone.jsx"},{"name":"IconPlus","sourcePath":"components/messaging/IconPlus.jsx"},{"name":"IconVideoCall","sourcePath":"components/messaging/IconVideoCall.jsx"},{"name":"Profile","sourcePath":"components/messaging/Profile.jsx"},{"name":"UIBottomBar","sourcePath":"components/messaging/UIBottomBar.jsx"},{"name":"UITitleBarAccount","sourcePath":"components/messaging/UITitleBarAccount.jsx"},{"name":"NavigationBottomNavBar","sourcePath":"components/navigation/NavigationBottomNavBar.jsx"},{"name":"NavigationTabBar","sourcePath":"components/navigation/NavigationTabBar.jsx"},{"name":"NavigationTopAppBar","sourcePath":"components/navigation/NavigationTopAppBar.jsx"}],"sourceHashes":{"components/badges/BadgeCancelled.jsx":"3e2a4645ade2","components/badges/BadgeCompleted.jsx":"83ac79b6a2c2","components/badges/BadgeOngoing.jsx":"f4f2fa56d9f4","components/buttons/ButtonPrimary.jsx":"5c581ecaf1a7","components/buttons/ButtonSecondary.jsx":"45f735c610ad","components/buttons/ButtonSmall.jsx":"7a7faad2da4d","components/buttons/ButtonText.jsx":"cfdea423d8ed","components/cards/CardBooking.jsx":"1836c2f4b2d7","components/cards/CardEarnings.jsx":"bfdcb28c9ee0","components/cards/CardProfileHeader.jsx":"773910b43bcd","components/cards/CardStat.jsx":"5d384afcc754","components/chrome/HomeIndicatorDark.jsx":"7e6a8b43f3e0","components/chrome/StatusBar.jsx":"515fd52eb273","components/chrome/StatusBarBattery.jsx":"98cb2440072c","components/chrome/StatusBarDynamicIsland.jsx":"b425df0ae3ad","components/chrome/StatusBarTime.jsx":"628b4fc4e3bd","components/forms/InputSearch.jsx":"bfacb9afccce","components/lists/ListItemNotification.jsx":"721d3275f420","components/lists/ListItemTransaction.jsx":"ab5a7d3197de","components/messaging/ChatBackground.jsx":"4ad9f892bd3c","components/messaging/IconAttachment.jsx":"1f5316bcc25e","components/messaging/IconAudioCall.jsx":"a1f2a8e2aa25","components/messaging/IconCamera.jsx":"2911afe7ca6f","components/messaging/IconMicrophone.jsx":"29e5eebfa5a8","components/messaging/IconPlus.jsx":"bba05722eba3","components/messaging/IconVideoCall.jsx":"38925a9fac44","components/messaging/Profile.jsx":"4e35ddd16b9f","components/messaging/UIBottomBar.jsx":"17fa51386e46","components/messaging/UITitleBarAccount.jsx":"d40d9fca5bc1","components/navigation/NavigationBottomNavBar.jsx":"96ef024cd44d","components/navigation/NavigationTabBar.jsx":"2efadd5826f4","components/navigation/NavigationTopAppBar.jsx":"508e1e8c913a","ui_kits/rider-app/BookingsScreen.jsx":"75eeb652e22b","ui_kits/rider-app/EarningsScreen.jsx":"c7dc60325d5d","ui_kits/rider-app/HomeScreen.jsx":"aa1b930b9e26","ui_kits/rider-app/MoreScreen.jsx":"790e838e7e8b","ui_kits/rider-app/NotificationsScreen.jsx":"7579a59dfd51","ui_kits/rider-app/kit.jsx":"bd7882829cb4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RapidoDesignSystem_ef9315 = window.RapidoDesignSystem_ef9315 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/BadgeCancelled.jsx
try { (() => {
// figma node: 380:637 Badge/Cancelled
function BadgeCancelled(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgb(234,67,53)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Cancelled"));
}
Object.assign(__ds_scope, { BadgeCancelled, __ds_default_components_badges_BadgeCancelled_1agbf8d: BadgeCancelled });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/BadgeCancelled.jsx", error: String((e && e.message) || e) }); }

// components/badges/BadgeCompleted.jsx
try { (() => {
// figma node: 380:636 Badge/Completed
function BadgeCompleted(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgb(52,168,83)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Completed"));
}
Object.assign(__ds_scope, { BadgeCompleted, __ds_default_components_badges_BadgeCompleted_rzcccf: BadgeCompleted });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/BadgeCompleted.jsx", error: String((e && e.message) || e) }); }

// components/badges/BadgeOngoing.jsx
try { (() => {
// figma node: 380:635 Badge/Ongoing
function BadgeOngoing(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "rgb(253,200,48)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Ongoing"));
}
Object.assign(__ds_scope, { BadgeOngoing, __ds_default_components_badges_BadgeOngoing_1kthur7: BadgeOngoing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/BadgeOngoing.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ButtonPrimary.jsx
try { (() => {
// figma node: 380:631 Button/Primary
function ButtonPrimary(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      borderRadius: 12,
      backgroundColor: "rgb(253,200,48)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Go Online"));
}
Object.assign(__ds_scope, { ButtonPrimary, __ds_default_components_buttons_ButtonPrimary_5y1o8: ButtonPrimary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ButtonPrimary.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ButtonSecondary.jsx
try { (() => {
// figma node: 380:632 Button/Secondary
function ButtonSecondary(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 48,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(26,26,26)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "View Details"));
}
Object.assign(__ds_scope, { ButtonSecondary, __ds_default_components_buttons_ButtonSecondary_8bwsd8: ButtonSecondary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ButtonSecondary.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ButtonSmall.jsx
try { (() => {
// figma node: 380:633 Button/Small
function ButtonSmall(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(253,200,48)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Accept"));
}
Object.assign(__ds_scope, { ButtonSmall, __ds_default_components_buttons_ButtonSmall_ptit59: ButtonSmall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ButtonSmall.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ButtonText.jsx
try { (() => {
// figma node: 380:634 Button/Text
function ButtonText(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--primary-yellow-dark)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "See All"));
}
Object.assign(__ds_scope, { ButtonText, __ds_default_components_buttons_ButtonText_1tcty3d: ButtonText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ButtonText.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardBooking.jsx
try { (() => {
// figma node: 380:642 Card/Booking
function CardBooking(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(253,200,48)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 10px 4px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Ongoing")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text2 ?? "₹120")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 40,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(52,168,83)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,8,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1 0 L 1 -0.5 L 1 -1 L 0 -1 L 0 -0.5 Z M 3 -0.5 L 3 0 L 5 0 L 5 -0.5 L 5 -1 L 3 -1 L 3 -0.5 Z M 7 -0.5 L 7 0 L 9 0 L 9 -0.5 L 9 -1 L 7 -1 L 7 -0.5 Z M 11 -0.5 L 11 0 L 13 0 L 13 -0.5 L 13 -1 L 11 -1 L 11 -0.5 Z M 15 -0.5 L 15 0 L 16 0 L 16 -0.5 L 16 -1 L 15 -1 L 15 -0.5 Z M 0 -0.5 L 0 0 L 1 0 L 1 -0.5 L 1 -1 L 0 -1 L 0 -0.5 Z M 3 -0.5 L 3 0 L 5 0 L 5 -0.5 L 5 -1 L 3 -1 L 3 -0.5 Z M 7 -0.5 L 7 0 L 9 0 L 9 -0.5 L 9 -1 L 7 -1 L 7 -0.5 Z M 11 -0.5 L 11 0 L 13 0 L 13 -0.5 L 13 -1 L 11 -1 L 11 -0.5 Z M 15 -0.5 L 15 0 L 16 0 L 16 -0.5 L 16 -1 L 15 -1 L 15 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      backgroundColor: "rgb(234,67,53)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(136,136,136)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text3 ?? "Pickup"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text4 ?? "Koramangala, Bangalore")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(136,136,136)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Drop"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Indiranagar, Bangalore")))));
}
Object.assign(__ds_scope, { CardBooking, __ds_default_components_cards_CardBooking_1aqj7w9: CardBooking });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardBooking.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardEarnings.jsx
try { (() => {
// figma node: 380:639 Card/Earnings
function CardEarnings(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.051)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(52,168,83)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "₹2,340.50"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "rgb(234,247,238)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.834,
    height: 5.834,
    viewBox: "0 0 5.834 5.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.083,
      top: 2.083,
      width: 5.834,
      height: 5.834
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.707 2.21 C -1.098 2.6 -1.098 3.234 -0.707 3.624 C -0.317 4.015 0.317 4.015 0.707 3.624 L 0 2.917 L -0.707 2.21 Z M 2.917 0 L 3.624 -0.707 L 2.917 -1.414 L 2.21 -0.707 L 2.917 0 Z M 5.127 3.624 C 5.517 4.015 6.151 4.015 6.541 3.624 C 6.932 3.234 6.932 2.6 6.541 2.21 L 5.834 2.917 L 5.127 3.624 Z M 1.917 5.834 C 1.917 6.386 2.365 6.834 2.917 6.834 C 3.469 6.834 3.917 6.386 3.917 5.834 L 2.917 5.834 L 1.917 5.834 Z M 0 2.917 L 0.707 3.624 L 3.624 0.707 L 2.917 0 L 2.21 -0.707 L -0.707 2.21 L 0 2.917 Z M 2.917 0 L 2.21 0.707 L 5.127 3.624 L 5.834 2.917 L 6.541 2.21 L 3.624 -0.707 L 2.917 0 Z M 2.917 0 L 1.917 0 L 1.917 5.834 L 2.917 5.834 L 3.917 5.834 L 3.917 0 L 2.917 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(52,168,83)",
      flexShrink: 0
    }
  }, props.text2 ?? "+12%"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text3 ?? "Today's Earnings"));
}
Object.assign(__ds_scope, { CardEarnings, __ds_default_components_cards_CardEarnings_lceshz: CardEarnings });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardEarnings.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardProfileHeader.jsx
try { (() => {
// figma node: 380:641 Card/Profile Header
function CardProfileHeader(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-22feff331a1be19c",
    style: {
      position: "relative",
      width: 48,
      borderRadius: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Ramesh Kumar"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(253,200,48)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 6px 2px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text2 ?? "4.8 ★"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text3 ?? "Rider since 2023")));
}
Object.assign(__ds_scope, { CardProfileHeader, __ds_default_components_cards_CardProfileHeader_ktz3wq: CardProfileHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardProfileHeader.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardStat.jsx
try { (() => {
// figma node: 380:640 Card/Stat
function CardStat(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.0314)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "₹56,430"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text2 ?? "This Month"));
}
Object.assign(__ds_scope, { CardStat, __ds_default_components_cards_CardStat_12nn77w: CardStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardStat.jsx", error: String((e && e.message) || e) }); }

// components/chrome/HomeIndicatorDark.jsx
try { (() => {
// figma node: 183:436 Home Indicator / Dark
function HomeIndicatorDark(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 34,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 121,
      top: 21,
      width: 134,
      height: 5,
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)"
    }
  }));
}
Object.assign(__ds_scope, { HomeIndicatorDark, __ds_default_components_chrome_HomeIndicatorDark_ixaq5r: HomeIndicatorDark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/HomeIndicatorDark.jsx", error: String((e && e.message) || e) }); }

// components/chrome/StatusBarBattery.jsx
try { (() => {
// figma node: 183:46 _StatusBar-battery (10 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "darkMode=" + __venc(p.darkMode) + '|' + "charge=" + __venc(p.charge) + '|' + "percentage=" + __venc(p.percentage) + '|' + "charging=" + __venc(p.charging);
function StatusBarBattery(_p = {}) {
  const props = {
    ..._p,
    prop: _p.prop ?? "80",
    darkMode: _p.darkMode ?? false,
    charge: _p.charge ?? "100%",
    percentage: _p.percentage ?? false,
    charging: _p.charging ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      opacity: 0.35,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 4 1 L 21 1 L 21 0 L 21 -1 L 4 -1 L 4 0 Z M 25 4 L 24 4 L 24 9 L 25 9 L 26 9 L 26 4 L 25 4 Z M 21 13 L 21 12 L 4 12 L 4 13 L 4 14 L 21 14 L 21 13 Z M 0 9 L 1 9 L 1 4 L 0 4 L -1 4 L -1 9 L 0 9 Z M 4 13 L 4 12 C 2.343 12 1 10.657 1 9 L 0 9 L -1 9 C -1 11.761 1.239 14 4 14 L 4 13 Z M 25 9 L 24 9 C 24 10.657 22.657 12 21 12 L 21 13 L 21 14 C 23.761 14 26 11.761 26 9 L 25 9 Z M 21 0 L 21 1 C 22.657 1 24 2.343 24 4 L 25 4 L 26 4 C 26 1.239 23.761 -1 21 -1 L 21 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 9,
    viewBox: "0 0 21 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 21,
      height: 9,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 0.895 0.895 0 2 0 L 19 0 C 20.105 0 21 0.895 21 2 L 21 7 C 21 8.105 20.105 9 19 9 L 2 9 C 0.895 9 0 8.105 0 7 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      opacity: 0.35,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 4 1 L 21 1 L 21 0 L 21 -1 L 4 -1 L 4 0 Z M 25 4 L 24 4 L 24 9 L 25 9 L 26 9 L 26 4 L 25 4 Z M 21 13 L 21 12 L 4 12 L 4 13 L 4 14 L 21 14 L 21 13 Z M 0 9 L 1 9 L 1 4 L 0 4 L -1 4 L -1 9 L 0 9 Z M 4 13 L 4 12 C 2.343 12 1 10.657 1 9 L 0 9 L -1 9 C -1 11.761 1.239 14 4 14 L 4 13 Z M 25 9 L 24 9 C 24 10.657 22.657 12 21 12 L 21 13 L 21 14 C 23.761 14 26 11.761 26 9 L 25 9 Z M 21 0 L 21 1 C 22.657 1 24 2.343 24 4 L 25 4 L 26 4 C 26 1.239 23.761 -1 21 -1 L 21 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 9,
    viewBox: "0 0 15 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 15,
      height: 9,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 0.895 0.895 0 2 0 L 13 0 C 14.105 0 15 0.895 15 2 L 15 7 C 15 8.105 14.105 9 13 9 L 2 9 C 0.895 9 0 8.105 0 7 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(0,0,0,0.35)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 13,
    viewBox: "0 0 21 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 21 0 L 21 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 5,
      top: 0,
      width: 14,
      height: 13,
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13px",
      letterSpacing: "0.060px",
      color: "rgb(255,255,255)"
    }
  }, props.prop));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      opacity: 0.35,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.572 1.055 L 4 1.055 C 2.374 1.055 1.055 2.374 1.055 4 L 1.055 9 C 1.055 10.626 2.374 11.945 4 11.945 L 9.086 11.945 C 8.982 12.23 8.915 12.605 9.041 13 L 4 13 C 1.791 13 0 11.209 0 9 L 0 4 C 0 1.791 1.791 0 4 0 L 12.431 0 L 11.572 1.055 Z M 21 0 C 23.209 0 25 1.791 25 4 L 25 9 C 25 11.209 23.209 13 21 13 L 11.949 13 L 12.809 11.945 L 21 11.945 C 22.626 11.945 23.945 10.626 23.945 9 L 23.945 4 C 23.945 2.374 22.626 1.055 21 1.055 L 15.291 1.055 C 15.396 0.777 15.471 0.4 15.338 0 L 21 0 Z M 11.52 11.945 L 10.87 12.742 C 10.765 12.873 10.651 12.953 10.527 12.983 C 10.408 13.013 10.299 13.003 10.201 12.95 C 10.104 12.898 10.035 12.813 9.994 12.697 C 9.957 12.581 9.967 12.442 10.027 12.281 L 10.153 11.945 L 11.52 11.945 Z M 13.852 0.017 C 13.975 -0.013 14.086 -0.003 14.184 0.05 C 14.281 0.102 14.348 0.187 14.386 0.303 C 14.427 0.415 14.415 0.552 14.352 0.713 L 14.224 1.055 L 12.861 1.055 L 13.515 0.252 C 13.619 0.125 13.732 0.047 13.852 0.017 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 9,
    viewBox: "0 0 16 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 9,
      color: "rgb(52,199,89)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.39 4.194 C 5.184 4.444 5 4.79 5 5.216 C 5 5.601 5.146 5.968 5.438 6.247 L 5.446 6.256 L 5.455 6.264 C 5.743 6.526 6.097 6.643 6.449 6.643 L 8.325 6.643 L 7.44 9 L 2 9 C 0.895 9 0 8.105 0 7 L 0 2 C 0 0.895 0.895 0 2 0 L 8.803 0 L 5.39 4.194 Z M 10.616 3.352 L 13.93 3.352 C 14.061 3.352 14.168 3.392 14.25 3.475 C 14.336 3.553 14.379 3.655 14.379 3.778 C 14.379 3.909 14.327 4.041 14.222 4.172 L 10.289 9 L 8.508 9 L 9.769 5.643 L 6.449 5.643 C 6.322 5.643 6.215 5.604 6.129 5.525 C 6.043 5.443 6 5.339 6 5.216 C 6 5.089 6.055 4.959 6.163 4.828 L 10.092 0 L 11.87 0 L 10.616 3.352 Z M 14 0 C 15.105 0 16 0.895 16 2 L 16 7 C 16 8.105 15.105 9 14 9 L 11.578 9 L 14.997 4.803 L 15.003 4.796 C 15.209 4.538 15.379 4.193 15.379 3.778 C 15.379 3.4 15.236 3.031 14.94 2.752 C 14.649 2.47 14.283 2.352 13.93 2.352 L 12.059 2.352 L 12.938 0 L 14 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.379,
    height: 13,
    viewBox: "0 0 8.379 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 8.379,
      height: 13,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.216 C 0 7.34 0.043 7.443 0.129 7.525 C 0.215 7.604 0.322 7.643 0.449 7.643 L 3.768 7.643 L 2.027 12.282 C 1.967 12.443 1.956 12.581 1.994 12.697 C 2.035 12.813 2.104 12.898 2.201 12.95 C 2.299 13.002 2.407 13.014 2.527 12.984 C 2.651 12.954 2.765 12.873 2.87 12.742 L 8.222 6.171 C 8.327 6.04 8.379 5.909 8.379 5.778 C 8.379 5.655 8.336 5.554 8.25 5.475 C 8.168 5.393 8.061 5.352 7.93 5.352 L 4.616 5.352 L 6.352 0.713 C 6.415 0.552 6.427 0.415 6.385 0.303 C 6.348 0.187 6.281 0.102 6.183 0.05 C 6.086 -0.002 5.975 -0.014 5.852 0.016 C 5.732 0.046 5.62 0.125 5.515 0.252 L 0.163 6.829 C 0.054 6.96 0 7.089 0 7.216 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      borderRadius: 4,
      color: "rgb(52,199,89)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 21 0 C 23.209 0 25 1.791 25 4 L 25 9 C 25 11.209 23.209 13 21 13 L 4 13 C 1.791 13 0 11.209 0 9 L 0 4 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      color: "rgb(52,199,89)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.156,
      top: 0,
      display: "flex",
      flexDirection: "row",
      gap: 1,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13px",
      letterSpacing: "0.060px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.prop), /*#__PURE__*/React.createElement("svg", {
    width: 4.844,
    height: 7.515,
    viewBox: "0 0 4.844 7.515",
    fill: "none",
    style: {
      position: "relative",
      width: 4.844,
      height: 7.515,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.171 C 0 4.243 0.025 4.302 0.075 4.35 C 0.124 4.395 0.186 4.418 0.26 4.418 L 2.178 4.418 L 1.172 7.1 C 1.137 7.193 1.131 7.273 1.152 7.34 C 1.176 7.407 1.216 7.456 1.273 7.486 C 1.329 7.516 1.392 7.523 1.461 7.505 C 1.532 7.488 1.598 7.442 1.659 7.366 L 4.753 3.568 C 4.813 3.492 4.844 3.416 4.844 3.34 C 4.844 3.269 4.819 3.21 4.769 3.165 C 4.721 3.117 4.66 3.094 4.584 3.094 L 2.669 3.094 L 3.672 0.412 C 3.708 0.319 3.715 0.24 3.691 0.175 C 3.67 0.108 3.631 0.059 3.574 0.029 C 3.518 -0.001 3.454 -0.008 3.383 0.009 C 3.314 0.027 3.249 0.072 3.188 0.146 L 0.094 3.947 C 0.031 4.023 0 4.098 0 4.171 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      opacity: 0.35,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 4 1.055 L 21 1.055 L 21 0 L 21 -1.055 L 4 -1.055 L 4 0 Z M 25 4 L 23.945 4 L 23.945 9 L 25 9 L 26.055 9 L 26.055 4 L 25 4 Z M 21 13 L 21 11.945 L 4 11.945 L 4 13 L 4 14.055 L 21 14.055 L 21 13 Z M 0 9 L 1.055 9 L 1.055 4 L 0 4 L -1.055 4 L -1.055 9 L 0 9 Z M 4 13 L 4 11.945 C 2.374 11.945 1.055 10.626 1.055 9 L 0 9 L -1.055 9 C -1.055 11.792 1.208 14.055 4 14.055 L 4 13 Z M 25 9 L 23.945 9 C 23.945 10.626 22.626 11.945 21 11.945 L 21 13 L 21 14.055 C 23.792 14.055 26.055 11.792 26.055 9 L 25 9 Z M 21 0 L 21 1.055 C 22.626 1.055 23.945 2.374 23.945 4 L 25 4 L 26.055 4 C 26.055 1.208 23.792 -1.055 21 -1.055 L 21 0 Z M 4 0 L 4 -1.055 C 1.208 -1.055 -1.055 1.208 -1.055 4 L 0 4 L 1.055 4 C 1.055 2.374 2.374 1.055 4 1.055 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 9,
    viewBox: "0 0 21 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 21,
      height: 9,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 0.895 0.895 0 2 0 L 19 0 C 20.105 0 21 0.895 21 2 L 21 7 C 21 8.105 20.105 9 19 9 L 2 9 C 0.895 9 0 8.105 0 7 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      opacity: 0.35,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0 L 4 1.055 L 21 1.055 L 21 0 L 21 -1.055 L 4 -1.055 L 4 0 Z M 25 4 L 23.945 4 L 23.945 9 L 25 9 L 26.055 9 L 26.055 4 L 25 4 Z M 21 13 L 21 11.945 L 4 11.945 L 4 13 L 4 14.055 L 21 14.055 L 21 13 Z M 0 9 L 1.055 9 L 1.055 4 L 0 4 L -1.055 4 L -1.055 9 L 0 9 Z M 4 13 L 4 11.945 C 2.374 11.945 1.055 10.626 1.055 9 L 0 9 L -1.055 9 C -1.055 11.792 1.208 14.055 4 14.055 L 4 13 Z M 25 9 L 23.945 9 C 23.945 10.626 22.626 11.945 21 11.945 L 21 13 L 21 14.055 C 23.792 14.055 26.055 11.792 26.055 9 L 25 9 Z M 21 0 L 21 1.055 C 22.626 1.055 23.945 2.374 23.945 4 L 25 4 L 26.055 4 C 26.055 1.208 23.792 -1.055 21 -1.055 L 21 0 Z M 4 0 L 4 -1.055 C 1.208 -1.055 -1.055 1.208 -1.055 4 L 0 4 L 1.055 4 C 1.055 2.374 2.374 1.055 4 1.055 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 9,
    viewBox: "0 0 15 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 15,
      height: 9,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 0.895 0.895 0 2 0 L 13 0 C 14.105 0 15 0.895 15 2 L 15 7 C 15 8.105 14.105 9 13 9 L 2 9 C 0.895 9 0 8.105 0 7 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 13,
    viewBox: "0 0 21 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 21 0 L 21 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 5,
      top: 0,
      width: 14,
      height: 13,
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13px",
      letterSpacing: "0.060px",
      color: "rgb(0,0,0)"
    }
  }, props.prop));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      color: "rgba(255,255,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.572 1.055 L 4 1.055 C 2.374 1.055 1.055 2.374 1.055 4 L 1.055 9 C 1.055 10.626 2.374 11.945 4 11.945 L 9.086 11.945 C 8.982 12.23 8.915 12.605 9.041 13 L 4 13 C 1.791 13 0 11.209 0 9 L 0 4 C 0 1.791 1.791 0 4 0 L 12.431 0 L 11.572 1.055 Z M 21 0 C 23.209 0 25 1.791 25 4 L 25 9 C 25 11.209 23.209 13 21 13 L 11.949 13 L 12.809 11.945 L 21 11.945 C 22.626 11.945 23.945 10.626 23.945 9 L 23.945 4 C 23.945 2.374 22.626 1.055 21 1.055 L 15.291 1.055 C 15.396 0.777 15.471 0.4 15.338 0 L 21 0 Z M 11.52 11.945 L 10.87 12.742 C 10.765 12.873 10.651 12.953 10.527 12.983 C 10.408 13.013 10.299 13.003 10.201 12.95 C 10.104 12.898 10.035 12.813 9.994 12.697 C 9.957 12.581 9.967 12.442 10.027 12.281 L 10.153 11.945 L 11.52 11.945 Z M 13.852 0.017 C 13.975 -0.013 14.086 -0.003 14.184 0.05 C 14.281 0.102 14.348 0.187 14.386 0.303 C 14.427 0.415 14.415 0.552 14.352 0.713 L 14.224 1.055 L 12.861 1.055 L 13.515 0.252 C 13.619 0.125 13.732 0.047 13.852 0.017 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 9,
    viewBox: "0 0 16 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 9,
      color: "rgb(48,209,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.39 4.194 C 5.184 4.444 5 4.79 5 5.216 C 5 5.601 5.146 5.968 5.438 6.247 L 5.446 6.256 L 5.455 6.264 C 5.743 6.526 6.097 6.643 6.449 6.643 L 8.325 6.643 L 7.44 9 L 2 9 C 0.895 9 0 8.105 0 7 L 0 2 C 0 0.895 0.895 0 2 0 L 8.803 0 L 5.39 4.194 Z M 10.616 3.352 L 13.93 3.352 C 14.061 3.352 14.168 3.392 14.25 3.475 C 14.336 3.553 14.379 3.655 14.379 3.778 C 14.379 3.909 14.327 4.041 14.222 4.172 L 10.289 9 L 8.508 9 L 9.769 5.643 L 6.449 5.643 C 6.322 5.643 6.215 5.604 6.129 5.525 C 6.043 5.443 6 5.339 6 5.216 C 6 5.089 6.055 4.959 6.163 4.828 L 10.092 0 L 11.87 0 L 10.616 3.352 Z M 14 0 C 15.105 0 16 0.895 16 2 L 16 7 C 16 8.105 15.105 9 14 9 L 11.578 9 L 14.997 4.803 L 15.003 4.796 C 15.209 4.538 15.379 4.193 15.379 3.778 C 15.379 3.4 15.236 3.031 14.94 2.752 C 14.649 2.47 14.283 2.352 13.93 2.352 L 12.059 2.352 L 12.938 0 L 14 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      color: "rgba(255,255,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.379,
    height: 13,
    viewBox: "0 0 8.379 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 8.379,
      height: 13,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.216 C 0 7.34 0.043 7.443 0.129 7.525 C 0.215 7.604 0.322 7.643 0.449 7.643 L 3.768 7.643 L 2.027 12.282 C 1.967 12.443 1.956 12.581 1.994 12.697 C 2.035 12.813 2.104 12.898 2.201 12.95 C 2.299 13.002 2.407 13.014 2.527 12.984 C 2.651 12.954 2.765 12.873 2.87 12.742 L 8.222 6.171 C 8.327 6.04 8.379 5.909 8.379 5.778 C 8.379 5.655 8.336 5.554 8.25 5.475 C 8.168 5.393 8.061 5.352 7.93 5.352 L 4.616 5.352 L 6.352 0.713 C 6.415 0.552 6.427 0.415 6.385 0.303 C 6.348 0.187 6.281 0.102 6.183 0.05 C 6.086 -0.002 5.975 -0.014 5.852 0.016 C 5.732 0.046 5.62 0.125 5.515 0.252 L 0.163 6.829 C 0.054 6.96 0 7.089 0 7.216 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27.401,
      height: 13,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 13,
    viewBox: "0 0 25 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 13,
      borderRadius: 4,
      color: "rgb(48,209,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 21 0 C 23.209 0 25 1.791 25 4 L 25 9 C 25 11.209 23.209 13 21 13 L 4 13 C 1.791 13 0 11.209 0 9 L 0 4 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.401,
    height: 4.220,
    viewBox: "0 0 1.401 4.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 5,
      width: 1.401,
      height: 4.22,
      color: "rgb(48,209,88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4.22 C 0.849 3.863 1.401 3.031 1.401 2.11 C 1.401 1.189 0.849 0.357 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.156,
      top: 0,
      display: "flex",
      flexDirection: "row",
      gap: 1,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13px",
      letterSpacing: "0.060px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.prop), /*#__PURE__*/React.createElement("svg", {
    width: 4.844,
    height: 7.515,
    viewBox: "0 0 4.844 7.515",
    fill: "none",
    style: {
      position: "relative",
      width: 4.844,
      height: 7.515,
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.171 C 0 4.243 0.025 4.302 0.075 4.35 C 0.124 4.395 0.186 4.418 0.26 4.418 L 2.178 4.418 L 1.172 7.1 C 1.137 7.193 1.131 7.273 1.152 7.34 C 1.176 7.407 1.216 7.456 1.273 7.486 C 1.329 7.516 1.392 7.523 1.461 7.505 C 1.532 7.488 1.598 7.442 1.659 7.366 L 4.753 3.568 C 4.813 3.492 4.844 3.416 4.844 3.34 C 4.844 3.269 4.819 3.21 4.769 3.165 C 4.721 3.117 4.66 3.094 4.584 3.094 L 2.669 3.094 L 3.672 0.412 C 3.708 0.319 3.715 0.24 3.691 0.175 C 3.67 0.108 3.631 0.059 3.574 0.029 C 3.518 -0.001 3.454 -0.008 3.383 0.009 C 3.314 0.027 3.249 0.072 3.188 0.146 L 0.094 3.947 C 0.031 4.023 0 4.098 0 4.171 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Dark Mode=False, Charge=100%, Charging=False, Percentage=False
    "darkMode=false|charge=100%25|percentage=false|charging=false": __body0,
    // figma: Dark Mode=False, Charge=70%, Charging=False, Percentage=False
    "darkMode=false|charge=70%25|percentage=false|charging=false": __body1,
    // figma: Dark Mode=False, Charge=Variable, Charging=False, Percentage=True
    "darkMode=false|charge=variable|percentage=true|charging=false": __body2,
    // figma: Dark Mode=False, Charge=70%, Charging=True, Percentage=False
    "darkMode=false|charge=70%25|percentage=false|charging=true": __body3,
    // figma: Dark Mode=False, Charge=Variable, Charging=True, Percentage=True
    "darkMode=false|charge=variable|percentage=true|charging=true": __body4,
    // figma: Dark Mode=True, Charge=100%, Charging=False, Percentage=False
    "darkMode=true|charge=100%25|percentage=false|charging=false": __body5,
    // figma: Dark Mode=True, Charge=70%, Charging=False, Percentage=False
    "darkMode=true|charge=70%25|percentage=false|charging=false": __body6,
    // figma: Dark Mode=True, Charge=Variable, Charging=False, Percentage=True
    "darkMode=true|charge=variable|percentage=true|charging=false": __body7,
    // figma: Dark Mode=True, Charge=70%, Charging=True, Percentage=False
    "darkMode=true|charge=70%25|percentage=false|charging=true": __body8,
    // figma: Dark Mode=True, Charge=Variable, Charging=True, Percentage=True
    "darkMode=true|charge=variable|percentage=true|charging=true": __body9
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { StatusBarBattery, __ds_default_components_chrome_StatusBarBattery_14rri63: StatusBarBattery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/StatusBarBattery.jsx", error: String((e && e.message) || e) }); }

// components/chrome/StatusBarDynamicIsland.jsx
try { (() => {
// figma node: 183:104 StatusBar-dynamicIsland (5 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "type=" + __venc(p.type);
function StatusBarDynamicIsland(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 125,
      height: 37,
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 37,
    viewBox: "0 0 80 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 61.5 0 C 71.717 0 80 8.283 80 18.5 L 80 18.5 C 80 28.717 71.717 37 61.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 88,
      top: 0,
      width: 37,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 18.5 0 C 28.717 0 37 8.283 37 18.5 L 37 18.5 C 37 28.717 28.717 37 18.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 162,
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 37,
    viewBox: "0 0 80 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 0,
      width: 80,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 61.5 0 C 71.717 0 80 8.283 80 18.5 C 80 28.717 71.717 37 61.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 106,
      top: 0,
      width: 37,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 C 28.717 0 37 8.283 37 18.5 C 37 28.717 28.717 37 18.5 37 C 8.283 37 0 28.717 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "relative",
      width: 37,
      overflow: "hidden",
      borderRadius: 100,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 18.5 0 C 28.717 0 37 8.283 37 18.5 L 37 18.5 C 37 28.717 28.717 37 18.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 37,
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 37,
    viewBox: "0 0 80 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 35,
      top: 0,
      width: 80,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 61.5 0 C 71.717 0 80 8.283 80 18.5 L 80 18.5 C 80 28.717 71.717 37 61.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 123,
      top: 0,
      width: 37,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 18.5 0 C 28.717 0 37 8.283 37 18.5 L 37 18.5 C 37 28.717 28.717 37 18.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 373,
      height: 83,
      borderRadius: 100,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 37,
    viewBox: "0 0 80 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 125,
      top: 10,
      width: 80,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 61.5 0 C 71.717 0 80 8.283 80 18.5 L 80 18.5 C 80 28.717 71.717 37 61.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 213,
      top: 10,
      width: 37,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 18.5 0 C 28.717 0 37 8.283 37 18.5 L 37 18.5 C 37 28.717 28.717 37 18.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 373,
      height: 200,
      borderRadius: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -10,
      top: 0,
      width: 393,
      height: 222,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 222,
      clipPath: "inset(0px 0px 0px 0px round 54px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 373,
    height: 234,
    viewBox: "0 0 373 234",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: -34,
      width: 373,
      height: 234,
      backdropFilter: "blur(4px)",
      color: "rgba(255,255,0,0.01)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 373 0 L 373 234 L 0 234 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 37,
    viewBox: "0 0 80 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 125,
      top: 10,
      width: 80,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 61.5 0 C 71.717 0 80 8.283 80 18.5 L 80 18.5 C 80 28.717 71.717 37 61.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 213,
      top: 10,
      width: 37,
      height: 37,
      overflow: "hidden",
      borderRadius: 100,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.5 C 0 8.283 8.283 0 18.5 0 L 18.5 0 C 28.717 0 37 8.283 37 18.5 L 37 18.5 C 37 28.717 28.717 37 18.5 37 L 18.5 37 C 8.283 37 0 28.717 0 18.5 L 0 18.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 373,
    height: 200,
    viewBox: "0 0 373 200",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 373,
      height: 200,
      overflow: "hidden",
      borderRadius: 42,
      filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.4))",
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 67.2 C 0 43.678 0 31.917 4.578 22.932 C 8.604 15.03 15.03 8.604 22.932 4.578 C 31.917 0 43.678 0 67.2 0 L 305.8 0 C 329.322 0 341.083 0 350.068 4.578 C 357.97 8.604 364.396 15.03 368.422 22.932 C 373 31.917 373 43.678 373 67.2 L 373 132.8 C 373 156.322 373 168.083 368.422 177.068 C 364.396 184.97 357.97 191.396 350.068 195.422 C 341.083 200 329.322 200 305.8 200 L 67.2 200 C 43.678 200 31.917 200 22.932 195.422 C 15.03 191.396 8.604 184.97 4.578 177.068 C 0 168.083 0 156.322 0 132.8 L 0 67.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Separated
    "type=separated": __body1,
    // figma: Type=Large
    "type=large": __body2,
    // figma: Type=XLarge
    "type=xlarge": __body3,
    // figma: Type=Ultra
    "type=ultra": __body4
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { StatusBarDynamicIsland, __ds_default_components_chrome_StatusBarDynamicIsland_197q9pc: StatusBarDynamicIsland });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/StatusBarDynamicIsland.jsx", error: String((e && e.message) || e) }); }

// components/chrome/StatusBarTime.jsx
try { (() => {
// figma node: 183:24 _StatusBar-time (9 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "darkMode=" + __venc(p.darkMode) + '|' + "type=" + __venc(p.type);
function StatusBarTime(_p = {}) {
  const props = {
    ..._p,
    time: _p.time ?? "9:41",
    darkMode: _p.darkMode ?? false,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 54,
      height: 21,
      borderRadius: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 54,
      height: 20,
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "21px",
      letterSpacing: "-0.320px",
      color: "rgb(0,0,0)"
    }
  }, props.time));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "21px",
      letterSpacing: "-0.320px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time), /*#__PURE__*/React.createElement("svg", {
    width: 16.523,
    height: 11.178,
    viewBox: "0 0 16.523 11.178",
    fill: "none",
    style: {
      position: "relative",
      width: 16.523,
      height: 11.178,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.6 3.688 L 3.294 3.688 L 3.294 2.831 C 3.294 2.209 3.637 1.873 4.266 1.873 L 6.602 1.873 C 7.236 1.873 7.579 2.209 7.579 2.831 L 7.579 3.688 L 9.001 3.688 L 9.001 2.831 C 9.001 2.209 9.344 1.873 10.004 1.873 L 12.238 1.873 C 12.898 1.873 13.241 2.209 13.241 2.831 L 13.241 3.688 L 14.936 3.688 L 14.936 1.866 C 14.936 0.641 14.276 0 13.07 0 L 3.466 0 C 2.26 0 1.6 0.641 1.6 1.866 L 1.6 3.688 Z M 0 10.607 C 0 10.956 0.229 11.178 0.571 11.178 L 0.978 11.178 C 1.32 11.178 1.549 10.956 1.549 10.607 L 1.549 9.706 C 1.619 9.731 1.854 9.744 2.019 9.744 L 14.504 9.744 C 14.676 9.744 14.904 9.731 14.98 9.706 L 14.98 10.607 C 14.98 10.956 15.209 11.178 15.552 11.178 L 15.952 11.178 C 16.294 11.178 16.523 10.956 16.523 10.607 L 16.523 6.703 C 16.523 5.408 15.812 4.71 14.511 4.71 L 2.019 4.71 C 0.711 4.71 0 5.408 0 6.703 L 0 10.607 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66,
      borderRadius: 24,
      backgroundColor: "rgb(52,199,89)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 12px 2px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "-0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66,
      borderRadius: 24,
      backgroundColor: "rgb(0,122,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 12px 2px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "-0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66,
      borderRadius: 24,
      backgroundColor: "rgb(255,149,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 12px 2px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "-0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 54,
      height: 21,
      borderRadius: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 54,
      height: 20,
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "21px",
      letterSpacing: "-0.320px",
      color: "rgb(255,255,255)"
    }
  }, props.time));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66,
      borderRadius: 24,
      backgroundColor: "rgb(48,209,88)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 12px 2px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "-0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66,
      borderRadius: 24,
      backgroundColor: "rgb(10,132,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 12px 2px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "-0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66,
      borderRadius: 24,
      backgroundColor: "rgb(255,159,10)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 12px 2px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "-0.500px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.time));
  const __impls = {
    // figma: Dark Mode=False, Type=Default
    "darkMode=false|type=default": __body0,
    // figma: Dark Mode=False, Type=Focus
    "darkMode=false|type=focus": __body1,
    // figma: Dark Mode=False, Type=Green
    "darkMode=false|type=green": __body2,
    // figma: Dark Mode=False, Type=Blue
    "darkMode=false|type=blue": __body3,
    // figma: Dark Mode=False, Type=Orange
    "darkMode=false|type=orange": __body4,
    // figma: Dark Mode=True, Type=Default
    "darkMode=true|type=default": __body5,
    // figma: Dark Mode=True, Type=Green
    "darkMode=true|type=green": __body6,
    // figma: Dark Mode=True, Type=Blue
    "darkMode=true|type=blue": __body7,
    // figma: Dark Mode=True, Type=Orange
    "darkMode=true|type=orange": __body8
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { StatusBarTime, __ds_default_components_chrome_StatusBarTime_1oyamjz: StatusBarTime });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/StatusBarTime.jsx", error: String((e && e.message) || e) }); }

// components/chrome/StatusBar.jsx
try { (() => {
// figma node: 183:124 StatusBar (12 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "darkMode=" + __venc(p.darkMode) + '|' + "dynamicIsland=" + __venc(p.dynamicIsland) + '|' + "dynIslSize=" + __venc(p.dynIslSize);
function StatusBar(_p = {}) {
  const props = {
    ..._p,
    darkMode: _p.darkMode ?? false,
    dynamicIsland: _p.dynamicIsland ?? false,
    dynIslSize: _p.dynIslSize ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 47,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 109,
      top: 0,
      width: 172,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 172,
    height: 32,
    viewBox: "0 0 172 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 172,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 172 0 C 168.686 0 166 2.686 166 6 L 166 6.713 C 166 9.208 166 10.456 165.902 11.507 C 164.889 22.323 156.323 30.889 145.507 31.902 C 144.456 32 143.208 32 140.713 32 L 31.287 32 C 28.792 32 27.544 32 26.493 31.902 C 15.677 30.889 7.111 22.323 6.098 11.507 C 6 10.456 6 9.208 6 6.713 L 6 6 C 6 2.686 3.314 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 14,
      width: 54,
      height: 21,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54,
      height: 21
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: false,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 286,
      top: 19,
      width: 77.401,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 50,
      top: 0,
      width: 27.401,
      height: 13
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: false,
    charge: "100%",
    percentage: false,
    charging: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 11.834,
    viewBox: "0 0 17 11.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 1,
      width: 17,
      height: 11.834
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.115 8.919 C 7.535 7.693 9.614 7.693 11.034 8.919 C 11.106 8.985 11.147 9.078 11.149 9.177 C 11.151 9.275 11.114 9.369 11.045 9.438 L 8.821 11.728 C 8.756 11.796 8.668 11.834 8.575 11.834 C 8.482 11.834 8.393 11.796 8.328 11.728 L 6.104 9.438 C 6.036 9.369 5.998 9.275 6 9.177 C 6.002 9.078 6.044 8.985 6.115 8.919 Z M 3.109 6.179 C 6.168 3.274 10.906 3.274 13.965 6.179 C 14.034 6.247 14.073 6.34 14.074 6.438 C 14.075 6.536 14.037 6.631 13.97 6.7 L 12.685 8.025 C 12.552 8.16 12.338 8.164 12.202 8.032 C 11.198 7.104 9.891 6.59 8.536 6.59 C 7.182 6.59 5.876 7.104 4.872 8.032 C 4.736 8.164 4.522 8.161 4.39 8.025 L 3.104 6.7 C 3.037 6.631 2.999 6.536 3 6.438 C 3.001 6.34 3.04 6.247 3.109 6.179 Z M 0.107 3.442 C 4.799 -1.147 12.201 -1.147 16.893 3.442 C 16.961 3.51 16.999 3.604 17 3.701 C 17 3.798 16.963 3.892 16.896 3.961 L 15.609 5.286 C 15.477 5.422 15.262 5.424 15.127 5.29 C 13.339 3.555 10.967 2.588 8.5 2.588 C 6.033 2.588 3.661 3.555 1.873 5.29 C 1.739 5.424 1.523 5.422 1.391 5.286 L 0.104 3.961 C 0.037 3.892 0 3.798 0 3.701 C 0.001 3.604 0.039 3.51 0.107 3.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 47,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 109,
      top: 0,
      width: 172,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 172,
    height: 32,
    viewBox: "0 0 172 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 172,
      height: 32,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 172 0 C 168.686 0 166 2.686 166 6 L 166 6.713 C 166 9.208 166 10.456 165.902 11.507 C 164.889 22.323 156.323 30.889 145.507 31.902 C 144.456 32 143.208 32 140.713 32 L 31.287 32 C 28.792 32 27.544 32 26.493 31.902 C 15.677 30.889 7.111 22.323 6.098 11.507 C 6 10.456 6 9.208 6 6.713 L 6 6 C 6 2.686 3.314 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 14,
      width: 54,
      height: 21,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54,
      height: 21
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: true,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 286,
      top: 19,
      width: 77.401,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 50,
      top: 0,
      width: 27.401,
      height: 13
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: true,
    charge: "70%",
    percentage: false,
    charging: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 11.834,
    viewBox: "0 0 17 11.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 1,
      width: 17,
      height: 11.834,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.115 8.919 C 7.535 7.693 9.614 7.693 11.034 8.919 C 11.106 8.985 11.147 9.078 11.149 9.177 C 11.151 9.275 11.114 9.369 11.045 9.438 L 8.821 11.728 C 8.756 11.796 8.668 11.834 8.575 11.834 C 8.482 11.834 8.393 11.796 8.328 11.728 L 6.104 9.438 C 6.036 9.369 5.998 9.275 6 9.177 C 6.002 9.078 6.044 8.985 6.115 8.919 Z M 3.109 6.179 C 6.168 3.274 10.906 3.274 13.965 6.179 C 14.034 6.247 14.073 6.34 14.074 6.438 C 14.075 6.536 14.037 6.631 13.97 6.7 L 12.685 8.025 C 12.552 8.16 12.338 8.164 12.202 8.032 C 11.198 7.104 9.891 6.59 8.536 6.59 C 7.182 6.59 5.876 7.104 4.872 8.032 C 4.736 8.164 4.522 8.161 4.39 8.025 L 3.104 6.7 C 3.037 6.631 2.999 6.536 3 6.438 C 3.001 6.34 3.04 6.247 3.109 6.179 Z M 0.107 3.442 C 4.799 -1.147 12.201 -1.147 16.893 3.442 C 16.961 3.51 16.999 3.604 17 3.701 C 17 3.798 16.963 3.892 16.896 3.961 L 15.609 5.286 C 15.477 5.422 15.262 5.424 15.127 5.29 C 13.339 3.555 10.967 2.588 8.5 2.588 C 6.033 2.588 3.661 3.555 1.873 5.29 C 1.739 5.424 1.523 5.422 1.391 5.286 L 0.104 3.961 C 0.037 3.892 0 3.798 0 3.701 C 0.001 3.604 0.039 3.51 0.107 3.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 18,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      height: 21,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: false,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 125,
      height: 37,
      flexShrink: 0
    },
    type: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 11px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 11.834,
    viewBox: "0 0 17 11.834",
    fill: "none",
    style: {
      position: "relative",
      width: 17,
      height: 11.834,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.115 8.919 C 7.535 7.693 9.614 7.693 11.034 8.919 C 11.106 8.985 11.147 9.078 11.149 9.177 C 11.151 9.275 11.114 9.369 11.045 9.438 L 8.821 11.728 C 8.756 11.796 8.668 11.834 8.575 11.834 C 8.482 11.834 8.393 11.796 8.328 11.728 L 6.104 9.438 C 6.036 9.369 5.998 9.275 6 9.177 C 6.002 9.078 6.044 8.985 6.115 8.919 Z M 3.109 6.179 C 6.168 3.274 10.906 3.274 13.965 6.179 C 14.034 6.247 14.073 6.34 14.074 6.438 C 14.075 6.536 14.037 6.631 13.97 6.7 L 12.685 8.025 C 12.552 8.16 12.338 8.164 12.202 8.032 C 11.198 7.104 9.891 6.59 8.536 6.59 C 7.182 6.59 5.876 7.104 4.872 8.032 C 4.736 8.164 4.522 8.161 4.39 8.025 L 3.104 6.7 C 3.037 6.631 2.999 6.536 3 6.438 C 3.001 6.34 3.04 6.247 3.109 6.179 Z M 0.107 3.442 C 4.799 -1.147 12.201 -1.147 16.893 3.442 C 16.961 3.51 16.999 3.604 17 3.701 C 17 3.798 16.963 3.892 16.896 3.961 L 15.609 5.286 C 15.477 5.422 15.262 5.424 15.127 5.29 C 13.339 3.555 10.967 2.588 8.5 2.588 C 6.033 2.588 3.661 3.555 1.873 5.29 C 1.739 5.424 1.523 5.422 1.391 5.286 L 0.104 3.961 C 0.037 3.892 0 3.798 0 3.701 C 0.001 3.604 0.039 3.51 0.107 3.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 27.401,
      height: 13,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: false,
    charge: "100%",
    percentage: false,
    charging: false
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      height: 21,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: false,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    type: "separated"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 16px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25,
      height: 13,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: false,
    charge: "100%",
    percentage: false,
    charging: false,
    style: {
      transform: "scale(0.912, 1)",
      transformOrigin: "0 0"
    }
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      height: 21,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: false,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 193,
      height: 37,
      flexShrink: 0
    },
    type: "large"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 26px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25,
      height: 13,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: false,
    charge: "100%",
    percentage: false,
    charging: false,
    style: {
      transform: "scale(0.912, 1)",
      transformOrigin: "0 0"
    }
  })))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 53,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 373,
      height: 83,
      flexShrink: 0
    },
    type: "xlarge"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 373,
      height: 200,
      flexShrink: 0
    },
    type: "ultra"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      height: 21,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: true,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 125,
      height: 37,
      flexShrink: 0
    },
    type: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 11px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 11.834,
    viewBox: "0 0 17 11.834",
    fill: "none",
    style: {
      position: "relative",
      width: 17,
      height: 11.834,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.115 8.919 C 7.535 7.693 9.614 7.693 11.034 8.919 C 11.106 8.985 11.147 9.078 11.149 9.177 C 11.151 9.275 11.114 9.369 11.045 9.438 L 8.821 11.728 C 8.756 11.796 8.668 11.834 8.575 11.834 C 8.482 11.834 8.393 11.796 8.328 11.728 L 6.104 9.438 C 6.036 9.369 5.998 9.275 6 9.177 C 6.002 9.078 6.044 8.985 6.115 8.919 Z M 3.109 6.179 C 6.168 3.274 10.906 3.274 13.965 6.179 C 14.034 6.247 14.073 6.34 14.074 6.438 C 14.075 6.536 14.037 6.631 13.97 6.7 L 12.685 8.025 C 12.552 8.16 12.338 8.164 12.202 8.032 C 11.198 7.104 9.891 6.59 8.536 6.59 C 7.182 6.59 5.876 7.104 4.872 8.032 C 4.736 8.164 4.522 8.161 4.39 8.025 L 3.104 6.7 C 3.037 6.631 2.999 6.536 3 6.438 C 3.001 6.34 3.04 6.247 3.109 6.179 Z M 0.107 3.442 C 4.799 -1.147 12.201 -1.147 16.893 3.442 C 16.961 3.51 16.999 3.604 17 3.701 C 17 3.798 16.963 3.892 16.896 3.961 L 15.609 5.286 C 15.477 5.422 15.262 5.424 15.127 5.29 C 13.339 3.555 10.967 2.588 8.5 2.588 C 6.033 2.588 3.661 3.555 1.873 5.29 C 1.739 5.424 1.523 5.422 1.391 5.286 L 0.104 3.961 C 0.037 3.892 0 3.798 0 3.701 C 0.001 3.604 0.039 3.51 0.107 3.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 27.401,
      height: 13,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: true,
    charge: "100%",
    percentage: false,
    charging: false
  })))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      height: 21,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: true,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    type: "separated"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 16px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25,
      height: 13,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: true,
    charge: "100%",
    percentage: false,
    charging: false,
    style: {
      transform: "scale(0.912, 1)",
      transformOrigin: "0 0"
    }
  })))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 10px 3px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      height: 21,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarTime, {
    darkMode: true,
    type: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 193,
      height: 37,
      flexShrink: 0
    },
    type: "large"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 26px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "relative",
      width: 18,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 3 C 10 2.448 10.448 2 11 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 11 C 13 11.552 12.552 12 12 12 L 11 12 C 10.448 12 10 11.552 10 11 L 10 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 1 C 15 0.448 15.448 0 16 0 L 17 0 C 17.552 0 18 0.448 18 1 L 18 11 C 18 11.552 17.552 12 17 12 L 16 12 C 15.448 12 15 11.552 15 11 L 15 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 6.5 C 5 5.948 5.448 5.5 6 5.5 L 7 5.5 C 7.552 5.5 8 5.948 8 6.5 L 8 11 C 8 11.552 7.552 12 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 8.448 0.448 8 1 8 L 2 8 C 2.552 8 3 8.448 3 9 L 3 11 C 3 11.552 2.552 12 2 12 L 1 12 C 0.448 12 0 11.552 0 11 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25,
      height: 13,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.StatusBarBattery, {
    darkMode: true,
    charge: "100%",
    percentage: false,
    charging: false,
    style: {
      transform: "scale(0.912, 1)",
      transformOrigin: "0 0"
    }
  })))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 59,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBarDynamicIsland, {
    style: {
      position: "relative",
      width: 373,
      height: 83,
      flexShrink: 0
    },
    type: "xlarge"
  })));
  const __impls = {
    // figma: Dark Mode=False, Dynamic Island=False, Dyn. Isl. Size=N/A
    "darkMode=false|dynamicIsland=false|dynIslSize=n/a": __body0,
    // figma: Dark Mode=True, Dynamic Island=False, Dyn. Isl. Size=N/A
    "darkMode=true|dynamicIsland=false|dynIslSize=n/a": __body1,
    // figma: Dark Mode=False, Dynamic Island=True, Dyn. Isl. Size=Default
    "darkMode=false|dynamicIsland=true|dynIslSize=default": __body2,
    // figma: Dark Mode=False, Dynamic Island=True, Dyn. Isl. Size=Separated
    "darkMode=false|dynamicIsland=true|dynIslSize=separated": __body3,
    // figma: Dark Mode=False, Dynamic Island=True, Dyn. Isl. Size=Large
    "darkMode=false|dynamicIsland=true|dynIslSize=lg": __body4,
    // figma: Dark Mode=False, Dynamic Island=True, Dyn. Isl. Size=XLarge
    "darkMode=false|dynamicIsland=true|dynIslSize=xl": __body5,
    // figma: Dark Mode=False, Dynamic Island=True, Dyn. Isl. Size=Ultra
    "darkMode=false|dynamicIsland=true|dynIslSize=ultra": __body6,
    // figma: Dark Mode=True, Dynamic Island=True, Dyn. Isl. Size=Default
    "darkMode=true|dynamicIsland=true|dynIslSize=default": __body7,
    // figma: Dark Mode=True, Dynamic Island=True, Dyn. Isl. Size=Separated
    "darkMode=true|dynamicIsland=true|dynIslSize=separated": __body8,
    // figma: Dark Mode=True, Dynamic Island=True, Dyn. Isl. Size=Large
    "darkMode=true|dynamicIsland=true|dynIslSize=lg": __body9,
    // figma: Dark Mode=True, Dynamic Island=True, Dyn. Isl. Size=XLarge
    "darkMode=true|dynamicIsland=true|dynIslSize=xl": __body10,
    // figma: Dark Mode=True, Dynamic Island=True, Dyn. Isl. Size=Ultra
    "darkMode=true|dynamicIsland=true|dynIslSize=ultra": __body6
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { StatusBar, __ds_default_components_chrome_StatusBar_5l1qkg: StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputSearch.jsx
try { (() => {
// figma node: 380:638 Input/Search
function InputSearch(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      height: 48,
      borderRadius: 8,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(136,136,136)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 13.500,
    viewBox: "0 0 13.500 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.25,
      width: 13.5,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.793 14.207 C 13.184 14.598 13.817 14.598 14.207 14.207 C 14.598 13.817 14.598 13.184 14.207 12.793 L 13.5 13.5 L 12.793 14.207 Z M 10.952 9.538 C 10.562 9.147 9.929 9.147 9.538 9.538 C 9.147 9.929 9.147 10.562 9.538 10.952 L 10.245 10.245 L 10.952 9.538 Z M 13.5 13.5 L 14.207 12.793 L 10.952 9.538 L 10.245 10.245 L 9.538 10.952 L 12.793 14.207 L 13.5 13.5 Z M 12 6 L 11 6 C 11 8.761 8.761 11 6 11 L 6 12 L 6 13 C 9.866 13 13 9.866 13 6 L 12 6 Z M 6 12 L 6 11 C 3.239 11 1 8.761 1 6 L 0 6 L -1 6 C -1 9.866 2.134 13 6 13 L 6 12 Z M 0 6 L 1 6 C 1 3.239 3.239 1 6 1 L 6 0 L 6 -1 C 2.134 -1 -1 2.134 -1 6 L 0 6 Z M 6 0 L 6 1 C 8.761 1 11 3.239 11 6 L 12 6 L 13 6 C 13 2.134 9.866 -1 6 -1 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Search location..."));
}
Object.assign(__ds_scope, { InputSearch, __ds_default_components_forms_InputSearch_14z8qe: InputSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputSearch.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListItemNotification.jsx
try { (() => {
// figma node: 380:643 List Item/Notification
function ListItemNotification(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 0px 12px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      borderRadius: 18,
      backgroundColor: "rgb(253,200,48)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.250,
    viewBox: "0 -0.625 10 1.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 2.5,
      width: 10,
      height: 1.25
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 10 0.625 C 10.345 0.625 10.625 0.345 10.625 0 C 10.625 -0.345 10.345 -0.625 10 -0.625 L 10 0 L 10 0.625 Z M 0 0 L 0 0.625 L 10 0.625 L 10 0 L 10 -0.625 L 0 -0.625 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.250,
    viewBox: "0 -0.625 10 1.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 6.667,
      width: 10,
      height: 1.25
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 10 0.625 C 10.345 0.625 10.625 0.345 10.625 0 C 10.625 -0.345 10.345 -0.625 10 -0.625 L 10 0 L 10 0.625 Z M 0 0 L 0 0.625 L 10 0.625 L 10 0 L 10 -0.625 L 0 -0.625 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.083,
    height: 6.667,
    viewBox: "0 0 7.083 6.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 10.833,
      width: 7.083,
      height: 6.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.428 -0.455 C 0.177 -0.692 -0.219 -0.68 -0.455 -0.428 C -0.692 -0.177 -0.68 0.219 -0.428 0.455 L 0 0 L 0.428 -0.455 Z M 6.655 7.122 C 6.906 7.358 7.302 7.346 7.538 7.095 C 7.775 6.844 7.763 6.448 7.512 6.212 L 7.083 6.667 L 6.655 7.122 Z M 0 0 L -0.428 0.455 L 6.655 7.122 L 7.083 6.667 L 7.512 6.212 L 0.428 -0.455 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.500,
    height: 1.250,
    viewBox: "0 -0.625 2.500 1.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 10.833,
      width: 2.5,
      height: 1.25
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 2.5 0.625 C 2.845 0.625 3.125 0.345 3.125 0 C 3.125 -0.345 2.845 -0.625 2.5 -0.625 L 2.5 0 L 2.5 0.625 Z M 0 0 L 0 0.625 L 2.5 0.625 L 2.5 0 L 2.5 -0.625 L 0 -0.625 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.167,
    height: 8.333,
    viewBox: "0 0 4.167 8.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 2.5,
      width: 4.167,
      height: 8.333
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.708 C -0.345 7.708 -0.625 7.988 -0.625 8.333 C -0.625 8.679 -0.345 8.958 0 8.958 L 0 8.333 L 0 7.708 Z M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 0 8.333 L 0 8.958 C 1.559 8.958 2.773 8.368 3.592 7.446 C 4.401 6.537 4.792 5.342 4.792 4.167 C 4.792 2.992 4.401 1.797 3.592 0.887 C 2.773 -0.034 1.559 -0.625 0 -0.625 L 0 0 L 0 0.625 C 1.219 0.625 2.088 1.076 2.658 1.717 C 3.238 2.37 3.542 3.258 3.542 4.167 C 3.542 5.075 3.238 5.963 2.658 6.616 C 2.088 7.257 1.219 7.708 0 7.708 L 0 8.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Payment received"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text2 ?? "2 hrs ago")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "Your payment of ₹450 has been credited")));
}
Object.assign(__ds_scope, { ListItemNotification, __ds_default_components_lists_ListItemNotification_1rl8aei: ListItemNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListItemNotification.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListItemTransaction.jsx
try { (() => {
// figma node: 380:644 List Item/Transaction
function ListItemTransaction(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.667,
    height: 12.667,
    viewBox: "0 0 12.667 12.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1.333,
      width: 12.667,
      height: 12.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 L -0.428 5.096 L -2.953 6.292 L -0.243 6.97 L 0 6 Z M 12.667 0 L 13.57 0.428 L 14.769 -2.102 L 12.239 -0.904 L 12.667 0 Z M 6.667 12.667 L 5.697 12.909 L 6.374 15.62 L 7.57 13.095 L 6.667 12.667 Z M 5.333 7.333 L 6.303 7.091 L 6.158 6.509 L 5.576 6.363 L 5.333 7.333 Z M 0 6 L 0.428 6.904 L 13.095 0.904 L 12.667 0 L 12.239 -0.904 L -0.428 5.096 L 0 6 Z M 12.667 0 L 11.763 -0.428 L 5.763 12.239 L 6.667 12.667 L 7.57 13.095 L 13.57 0.428 L 12.667 0 Z M 6.667 12.667 L 7.637 12.424 L 6.303 7.091 L 5.333 7.333 L 4.363 7.576 L 5.697 12.909 L 6.667 12.667 Z M 5.333 7.333 L 5.576 6.363 L 0.243 5.03 L 0 6 L -0.243 6.97 L 5.091 8.303 L 5.333 7.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Ride #4523"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text2 ?? "Today, 2:30 PM")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text3 ?? "₹180"));
}
Object.assign(__ds_scope, { ListItemTransaction, __ds_default_components_lists_ListItemTransaction_1dvznqh: ListItemTransaction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListItemTransaction.jsx", error: String((e && e.message) || e) }); }

// components/messaging/ChatBackground.jsx
try { (() => {
// figma node: 183:3 Chat Background
function ChatBackground(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 732,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 732,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f3af074d025ea30f",
    style: {
      position: "absolute",
      left: 0,
      top: -204.279,
      width: 375,
      height: 1202.977
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6f20b2c665261d09",
    style: {
      position: "absolute",
      left: -30,
      top: 0,
      width: 436,
      height: 732
    }
  })));
}
Object.assign(__ds_scope, { ChatBackground, __ds_default_components_messaging_ChatBackground_xsua6f: ChatBackground });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/ChatBackground.jsx", error: String((e && e.message) || e) }); }

// components/messaging/IconAttachment.jsx
try { (() => {
// figma node: 183:450 Icon / Attachment
// ICON SUBSTITUTION: the source layer is a BOOLEAN_OPERATION whose geometry could
// not be decoded from the .fig. Path data below is Lucide 0.469 (same 24px grid,
// 2px stroke, rounded caps) tinted with the source's own iOS blue rgb(0,122,255).
function IconAttachment(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.234 20.252 21 12.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
  })));
}
Object.assign(__ds_scope, { IconAttachment, __ds_default_components_messaging_IconAttachment_9t5k49: IconAttachment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/IconAttachment.jsx", error: String((e && e.message) || e) }); }

// components/messaging/IconAudioCall.jsx
try { (() => {
// figma node: 183:300 Icon / Audio Call
// ICON SUBSTITUTION: the source layer is a BOOLEAN_OPERATION whose geometry could
// not be decoded from the .fig. Path data below is Lucide 0.469 (same 24px grid,
// 2px stroke, rounded caps) tinted with the source's own iOS blue rgb(0,122,255).
function IconAudioCall(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
  })));
}
Object.assign(__ds_scope, { IconAudioCall, __ds_default_components_messaging_IconAudioCall_bh503i: IconAudioCall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/IconAudioCall.jsx", error: String((e && e.message) || e) }); }

// components/messaging/IconCamera.jsx
try { (() => {
// figma node: 183:442 Icon / Camera
// ICON SUBSTITUTION: the source layer is a BOOLEAN_OPERATION whose geometry could
// not be decoded from the .fig. Path data below is Lucide 0.469 (same 24px grid,
// 2px stroke, rounded caps) tinted with the source's own iOS blue rgb(0,122,255).
function IconCamera(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 13,
    r: 3
  })));
}
Object.assign(__ds_scope, { IconCamera, __ds_default_components_messaging_IconCamera_obg1dl: IconCamera });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/IconCamera.jsx", error: String((e && e.message) || e) }); }

// components/messaging/IconMicrophone.jsx
try { (() => {
// figma node: 183:446 Icon / Microphone
// ICON SUBSTITUTION: the source layer is a BOOLEAN_OPERATION whose geometry could
// not be decoded from the .fig. Path data below is Lucide 0.469 (same 24px grid,
// 2px stroke, rounded caps) tinted with the source's own iOS blue rgb(0,122,255).
function IconMicrophone(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 9,
    y: 2,
    width: 6,
    height: 13,
    rx: 3
  })));
}
Object.assign(__ds_scope, { IconMicrophone, __ds_default_components_messaging_IconMicrophone_1ouhoys: IconMicrophone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/IconMicrophone.jsx", error: String((e && e.message) || e) }); }

// components/messaging/IconPlus.jsx
try { (() => {
// figma node: 183:438 Icon / Plus
// The source's two VECTOR layers ("Vector 19", "Vector 20") carry no decodable
// geometry, but their frames do: two 1.5×18 bars, one upright and one rotated,
// centred in the 24px box. Rebuilt from those exact dimensions.
function IconPlus(_p = {}) {
  const props = _p;
  const bar = {
    position: "absolute",
    background: "currentColor",
    borderRadius: 0.75
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...bar,
      left: 11.25,
      top: 3,
      width: 1.5,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bar,
      left: 3,
      top: 11.25,
      width: 18,
      height: 1.5
    }
  }));
}
Object.assign(__ds_scope, { IconPlus, __ds_default_components_messaging_IconPlus_1f60t9w: IconPlus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/IconPlus.jsx", error: String((e && e.message) || e) }); }

// components/messaging/IconVideoCall.jsx
try { (() => {
// figma node: 183:302 Icon / Video Call
// ICON SUBSTITUTION: the source layer is a BOOLEAN_OPERATION whose geometry could
// not be decoded from the .fig. Path data below is Lucide 0.469 (same 24px grid,
// 2px stroke, rounded caps) tinted with the source's own iOS blue rgb(0,122,255).
function IconVideoCall(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,122,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 2,
    y: 6,
    width: 14,
    height: 12,
    rx: 2
  })));
}
Object.assign(__ds_scope, { IconVideoCall, __ds_default_components_messaging_IconVideoCall_171rs8z: IconVideoCall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/IconVideoCall.jsx", error: String((e && e.message) || e) }); }

// components/messaging/Profile.jsx
try { (() => {
// figma node: 183:352 Profile
function Profile(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b800e4d2130352e2",
    style: {
      position: "relative",
      width: 36,
      borderRadius: "50%",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text1 ?? "Alena"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      color: "rgb(37,211,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.092 0 L 7.439 1.545 L 4.867 1 L 3.857 3.273 L 1.653 3.818 L 1.929 6.273 L 0 8 L 1.378 9.909 L 0.643 12.091 L 2.755 13.455 L 3.031 15.818 L 5.694 15.818 L 7.347 18 L 9.092 16.545 L 11.296 17.818 L 12.582 15.818 L 15.061 15.818 L 15.429 13.455 L 17.541 12.091 L 16.714 9.909 L 18 8 L 16.255 6.273 L 16.439 3.818 L 14.418 3.273 L 13.224 1 L 10.837 1.545 L 9.092 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.357,
    height: 7.347,
    viewBox: "0 0 8.357 7.347",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.051,
      top: 5.418,
      width: 8.357,
      height: 7.347,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.918 3.398 L 0 4.5 L 3.122 7.347 L 8.357 1.01 L 7.163 0 L 2.847 5.143 L 0.918 3.398 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.002em",
      color: "rgb(137,137,137)",
      flexShrink: 0
    }
  }, props.text2 ?? "typing...")));
}
Object.assign(__ds_scope, { Profile, __ds_default_components_messaging_Profile_a3c2oo: Profile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/Profile.jsx", error: String((e && e.message) || e) }); }

// components/messaging/UIBottomBar.jsx
try { (() => {
// figma node: 183:454 UI / Bottom Bar
function UIBottomBar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 80,
      position: "relative",
      color: "rgb(75,75,77)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 80,
      backgroundColor: "rgb(23,23,23)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 0.5,
      backgroundColor: "currentColor",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.HomeIndicatorDark, {
    style: {
      position: "absolute",
      left: 0,
      top: 46,
      width: 375,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 10,
      width: 345,
      height: 30,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconPlus, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 293,
      top: 13,
      width: 24,
      height: 24
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.IconCamera, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 334,
      top: 13,
      width: 24,
      height: 24
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.IconMicrophone, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 10,
      width: 230,
      height: 30,
      borderRadius: 15,
      backgroundColor: "rgb(44,44,46)",
      boxShadow: "inset 0 0 0 1px rgb(75,75,77)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 246,
      top: 13,
      width: 24,
      height: 24
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.IconAttachment, null)));
}
Object.assign(__ds_scope, { UIBottomBar, __ds_default_components_messaging_UIBottomBar_z16egf: UIBottomBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/UIBottomBar.jsx", error: String((e && e.message) || e) }); }

// components/messaging/UITitleBarAccount.jsx
try { (() => {
// figma node: 183:361 UI / Title Bar / Account
function UITitleBarAccount(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 44,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 44,
      backgroundColor: "rgb(23,23,23)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 44,
      width: 375,
      height: 0.5,
      backgroundColor: "currentColor",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 336,
      top: 10,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconAudioCall, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 290,
      top: 10,
      width: 24,
      height: 24
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.IconVideoCall, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "10px 9px 10px 9px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 11.977,
      height: 20.789,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.977,
    height: 20.789,
    viewBox: "0 0 11.977 20.789",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.977,
      height: 20.789,
      color: "rgb(0,122,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.609 20.391 C 9.867 20.648 10.195 20.789 10.582 20.789 C 11.355 20.789 11.977 20.18 11.977 19.406 C 11.977 19.02 11.813 18.668 11.543 18.398 L 3.34 10.383 L 11.543 2.391 C 11.813 2.121 11.977 1.758 11.977 1.383 C 11.977 0.609 11.355 0 10.582 0 C 10.195 0 9.867 0.141 9.609 0.398 L 0.492 9.305 C 0.164 9.609 0.012 9.984 0 10.395 C 0 10.805 0.164 11.156 0.492 11.473 L 9.609 20.391 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 17,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.408px",
      color: "rgb(0,122,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "12")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 61,
      top: 3,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b800e4d2130352e2",
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: "50%",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Alena"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      color: "rgb(37,211,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.092 0 L 7.439 1.545 L 4.867 1 L 3.857 3.273 L 1.653 3.818 L 1.929 6.273 L 0 8 L 1.378 9.909 L 0.643 12.091 L 2.755 13.455 L 3.031 15.818 L 5.694 15.818 L 7.347 18 L 9.092 16.545 L 11.296 17.818 L 12.582 15.818 L 15.061 15.818 L 15.429 13.455 L 17.541 12.091 L 16.714 9.909 L 18 8 L 16.255 6.273 L 16.439 3.818 L 14.418 3.273 L 13.224 1 L 10.837 1.545 L 9.092 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.357,
    height: 7.347,
    viewBox: "0 0 8.357 7.347",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.051,
      top: 5.418,
      width: 8.357,
      height: 7.347,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.918 3.398 L 0 4.5 L 3.122 7.347 L 8.357 1.01 L 7.163 0 L 2.847 5.143 L 0.918 3.398 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.002em",
      color: "rgb(137,137,137)",
      flexShrink: 0
    }
  }, "typing..."))));
}
Object.assign(__ds_scope, { UITitleBarAccount, __ds_default_components_messaging_UITitleBarAccount_w52s7d: UITitleBarAccount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/UITitleBarAccount.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationBottomNavBar.jsx
try { (() => {
// figma node: 380:630 Navigation/Bottom Nav Bar
function NavigationBottomNavBar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,235)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 0px 10px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15.834,
    viewBox: "0 0 15 15.834",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 1.666,
      width: 15,
      height: 15.834,
      color: "rgb(253,200,48)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 15.833 C 9 16.386 9.448 16.833 10 16.833 C 10.552 16.833 11 16.386 11 15.833 L 10 15.833 L 9 15.833 Z M 4 15.833 C 4 16.386 4.448 16.833 5 16.833 C 5.552 16.833 6 16.386 6 15.833 L 5 15.833 L 4 15.833 Z M 0 6.667 L 1 6.667 L 1 6.667 L 0 6.667 Z M 0.591 5.394 L 1.236 6.158 L 1.242 6.153 L 0.591 5.394 Z M 6.424 0.394 L 5.779 -0.37 L 5.773 -0.366 L 6.424 0.394 Z M 7.5 0 L 7.5 -1 L 7.5 0 Z M 8.576 0.394 L 9.227 -0.366 L 9.221 -0.37 L 8.576 0.394 Z M 14.409 5.394 L 13.758 6.153 L 13.764 6.157 L 14.409 5.394 Z M 15 6.667 L 14 6.667 L 14 6.667 L 15 6.667 Z M 0 14.167 L -1 14.167 L 0 14.167 Z M 10 15.833 L 11 15.833 L 11 9.167 L 10 9.167 L 9 9.167 L 9 15.833 L 10 15.833 Z M 10 9.167 L 11 9.167 C 11 8.68 10.807 8.214 10.463 7.87 L 9.756 8.577 L 9.049 9.285 C 9.018 9.253 9 9.211 9 9.167 L 10 9.167 Z M 9.756 8.577 L 10.463 7.87 C 10.119 7.526 9.653 7.333 9.167 7.333 L 9.167 8.333 L 9.167 9.333 C 9.122 9.333 9.08 9.316 9.049 9.285 L 9.756 8.577 Z M 9.167 8.333 L 9.167 7.333 L 5.833 7.333 L 5.833 8.333 L 5.833 9.333 L 9.167 9.333 L 9.167 8.333 Z M 5.833 8.333 L 5.833 7.333 C 5.347 7.333 4.881 7.526 4.537 7.87 L 5.244 8.577 L 5.951 9.285 C 5.92 9.316 5.878 9.333 5.833 9.333 L 5.833 8.333 Z M 5.244 8.577 L 4.537 7.87 C 4.193 8.214 4 8.68 4 9.167 L 5 9.167 L 6 9.167 C 6 9.211 5.982 9.253 5.951 9.285 L 5.244 8.577 Z M 5 9.167 L 4 9.167 L 4 15.833 L 5 15.833 L 6 15.833 L 6 9.167 L 5 9.167 Z M 0 6.667 L 1 6.667 C 1 6.57 1.021 6.474 1.062 6.386 L 0.155 5.965 L -0.752 5.544 C -0.916 5.896 -1 6.279 -1 6.667 L 0 6.667 Z M 0.155 5.965 L 1.062 6.386 C 1.103 6.298 1.162 6.22 1.236 6.157 L 0.591 5.394 L -0.055 4.63 C -0.351 4.88 -0.589 5.192 -0.752 5.544 L 0.155 5.965 Z M 0.591 5.394 L 1.242 6.153 L 7.075 1.153 L 6.424 0.394 L 5.773 -0.366 L -0.06 4.634 L 0.591 5.394 Z M 6.424 0.394 L 7.07 1.157 C 7.19 1.056 7.342 1 7.5 1 L 7.5 0 L 7.5 -1 C 6.87 -1 6.26 -0.777 5.779 -0.37 L 6.424 0.394 Z M 7.5 0 L 7.5 1 C 7.658 1 7.81 1.056 7.93 1.157 L 8.576 0.394 L 9.221 -0.37 C 8.74 -0.777 8.13 -1 7.5 -1 L 7.5 0 Z M 8.576 0.394 L 7.925 1.153 L 13.758 6.153 L 14.409 5.394 L 15.06 4.634 L 9.227 -0.366 L 8.576 0.394 Z M 14.409 5.394 L 13.764 6.157 C 13.838 6.22 13.897 6.298 13.938 6.386 L 14.845 5.965 L 15.752 5.544 C 15.589 5.192 15.351 4.88 15.055 4.63 L 14.409 5.394 Z M 14.845 5.965 L 13.938 6.386 C 13.979 6.474 14 6.57 14 6.667 L 15 6.667 L 16 6.667 C 16 6.279 15.916 5.896 15.752 5.544 L 14.845 5.965 Z M 15 6.667 L 14 6.667 L 14 14.167 L 15 14.167 L 16 14.167 L 16 6.667 L 15 6.667 Z M 15 14.167 L 14 14.167 C 14 14.344 13.93 14.513 13.805 14.638 L 14.512 15.346 L 15.219 16.053 C 15.719 15.553 16 14.874 16 14.167 L 15 14.167 Z M 14.512 15.346 L 13.805 14.638 C 13.68 14.763 13.51 14.834 13.333 14.834 L 13.333 15.834 L 13.333 16.834 C 14.041 16.834 14.719 16.553 15.219 16.053 L 14.512 15.346 Z M 13.333 15.834 L 13.333 14.834 L 1.667 14.834 L 1.667 15.834 L 1.667 16.834 L 13.333 16.834 L 13.333 15.834 Z M 1.667 15.834 L 1.667 14.834 C 1.49 14.834 1.32 14.763 1.195 14.638 L 0.488 15.346 L -0.219 16.053 C 0.281 16.553 0.959 16.834 1.667 16.834 L 1.667 15.834 Z M 0.488 15.346 L 1.195 14.638 C 1.07 14.513 1 14.344 1 14.167 L 0 14.167 L -1 14.167 C -1 14.874 -0.719 15.553 -0.219 16.053 L 0.488 15.346 Z M 0 14.167 L 1 14.167 L 1 6.667 L 0 6.667 L -1 6.667 L -1 14.167 L 0 14.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--primary-yellow-dark)",
      flexShrink: 0
    }
  }, props.text1 ?? "Home")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.668,
    height: 8.332,
    viewBox: "0 0 16.668 8.332",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.666,
      top: 5.834,
      width: 16.668,
      height: 8.332,
      color: "rgb(136,136,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.668 -1 C 11.115 -1 10.668 -0.552 10.668 0 C 10.668 0.552 11.115 1 11.668 1 L 11.668 0 L 11.668 -1 Z M 16.668 0 L 17.668 0 L 17.668 -1 L 16.668 -1 L 16.668 0 Z M 15.668 4.999 C 15.668 5.551 16.116 5.999 16.668 5.999 C 17.22 5.999 17.668 5.551 17.668 4.999 L 16.668 4.999 L 15.668 4.999 Z M 9.584 7.082 L 8.877 7.789 L 9.584 8.496 L 10.291 7.789 L 9.584 7.082 Z M 5.417 2.916 L 6.124 2.209 L 5.417 1.502 L 4.71 2.209 L 5.417 2.916 Z M -0.707 7.625 C -1.098 8.015 -1.098 8.648 -0.707 9.039 C -0.317 9.43 0.316 9.43 0.707 9.039 L 0 8.332 L -0.707 7.625 Z M 11.668 0 L 11.668 1 L 16.668 1 L 16.668 0 L 16.668 -1 L 11.668 -1 L 11.668 0 Z M 16.668 0 L 15.668 0 L 15.668 4.999 L 16.668 4.999 L 17.668 4.999 L 17.668 0 L 16.668 0 Z M 16.668 0 L 15.961 -0.707 L 8.877 6.375 L 9.584 7.082 L 10.291 7.789 L 17.375 0.707 L 16.668 0 Z M 9.584 7.082 L 10.291 6.375 L 6.124 2.209 L 5.417 2.916 L 4.71 3.623 L 8.877 7.789 L 9.584 7.082 Z M 5.417 2.916 L 4.71 2.209 L -0.707 7.625 L 0 8.332 L 0.707 9.039 L 6.124 3.623 L 5.417 2.916 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text2 ?? "Earnings")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16.668,
    viewBox: "0 0 15 16.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 1.666,
      width: 15,
      height: 16.668,
      color: "rgb(136,136,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.167 0 C 5.167 -0.552 4.719 -1 4.167 -1 C 3.614 -1 3.167 -0.552 3.167 0 L 4.167 0 L 5.167 0 Z M 3.167 3.334 C 3.167 3.886 3.614 4.334 4.167 4.334 C 4.719 4.334 5.167 3.886 5.167 3.334 L 4.167 3.334 L 3.167 3.334 Z M 11.833 0 C 11.833 -0.552 11.386 -1 10.833 -1 C 10.281 -1 9.833 -0.552 9.833 0 L 10.833 0 L 11.833 0 Z M 9.833 3.334 C 9.833 3.886 10.281 4.334 10.833 4.334 C 11.386 4.334 11.833 3.886 11.833 3.334 L 10.833 3.334 L 9.833 3.334 Z M 0 5.667 C -0.552 5.667 -1 6.115 -1 6.667 C -1 7.219 -0.552 7.667 0 7.667 L 0 6.667 L 0 5.667 Z M 15 7.667 C 15.552 7.667 16 7.219 16 6.667 C 16 6.115 15.552 5.667 15 5.667 L 15 6.667 L 15 7.667 Z M 4.167 0 L 3.167 0 L 3.167 3.334 L 4.167 3.334 L 5.167 3.334 L 5.167 0 L 4.167 0 Z M 10.833 0 L 9.833 0 L 9.833 3.334 L 10.833 3.334 L 11.833 3.334 L 11.833 0 L 10.833 0 Z M 0 6.667 L 0 7.667 L 15 7.667 L 15 6.667 L 15 5.667 L 0 5.667 L 0 6.667 Z M 1.667 1.667 L 1.667 2.667 L 13.333 2.667 L 13.333 1.667 L 13.333 0.667 L 1.667 0.667 L 1.667 1.667 Z M 13.333 1.667 L 13.333 2.667 C 13.701 2.667 14 2.965 14 3.334 L 15 3.334 L 16 3.334 C 16 1.861 14.806 0.667 13.333 0.667 L 13.333 1.667 Z M 15 3.334 L 14 3.334 L 14 15.001 L 15 15.001 L 16 15.001 L 16 3.334 L 15 3.334 Z M 15 15.001 L 14 15.001 C 14 15.37 13.701 15.668 13.333 15.668 L 13.333 16.668 L 13.333 17.668 C 14.806 17.668 16 16.474 16 15.001 L 15 15.001 Z M 13.333 16.668 L 13.333 15.668 L 1.667 15.668 L 1.667 16.668 L 1.667 17.668 L 13.333 17.668 L 13.333 16.668 Z M 1.667 16.668 L 1.667 15.668 C 1.299 15.668 1 15.37 1 15.001 L 0 15.001 L -1 15.001 C -1 16.474 0.194 17.668 1.667 17.668 L 1.667 16.668 Z M 0 15.001 L 1 15.001 L 1 3.334 L 0 3.334 L -1 3.334 L -1 15.001 L 0 15.001 Z M 0 3.334 L 1 3.334 C 1 2.965 1.299 2.667 1.667 2.667 L 1.667 1.667 L 1.667 0.667 C 0.194 0.667 -1 1.861 -1 3.334 L 0 3.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text3 ?? "Bookings")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16.668,
    viewBox: "0 0 15 16.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 1.666,
      width: 15,
      height: 16.668,
      color: "rgb(136,136,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.922 15.335 C 6.645 14.856 6.034 14.693 5.556 14.969 C 5.077 15.245 4.913 15.856 5.19 16.335 L 6.056 15.835 L 6.922 15.335 Z M 9.808 16.335 C 10.085 15.856 9.921 15.245 9.442 14.969 C 8.964 14.693 8.352 14.856 8.076 15.335 L 8.942 15.835 L 9.808 16.335 Z M 0.218 11.106 L -0.501 10.41 L -0.511 10.421 L -0.521 10.432 L 0.218 11.106 Z M 0.833 12.501 L 0.832 13.501 L 0.833 13.501 L 0.833 12.501 Z M 14.166 12.501 L 14.167 11.501 L 14.166 11.501 L 14.166 12.501 Z M 14.783 11.107 L 15.523 10.434 L 15.512 10.422 L 15.501 10.41 L 14.783 11.107 Z M 7.5 0 L 7.5 -1 L 7.5 0 Z M 2.499 5 L 1.499 5 L 2.499 5 Z M 6.056 15.835 L 5.19 16.335 C 5.424 16.74 5.76 17.077 6.166 17.311 L 6.666 16.445 L 7.166 15.579 C 7.064 15.52 6.98 15.436 6.922 15.335 L 6.056 15.835 Z M 6.666 16.445 L 6.166 17.311 C 6.571 17.545 7.031 17.668 7.499 17.668 L 7.499 16.668 L 7.499 15.668 C 7.382 15.668 7.267 15.637 7.166 15.579 L 6.666 16.445 Z M 7.499 16.668 L 7.499 17.668 C 7.967 17.668 8.427 17.545 8.832 17.311 L 8.332 16.445 L 7.832 15.579 C 7.731 15.637 7.616 15.668 7.499 15.668 L 7.499 16.668 Z M 8.332 16.445 L 8.832 17.311 C 9.238 17.077 9.574 16.74 9.808 16.335 L 8.942 15.835 L 8.076 15.335 C 8.018 15.436 7.934 15.52 7.832 15.579 L 8.332 16.445 Z M 0.218 11.106 L -0.521 10.432 C -0.761 10.694 -0.919 11.021 -0.976 11.372 L 0.011 11.533 L 0.998 11.695 C 0.993 11.726 0.978 11.756 0.956 11.78 L 0.218 11.106 Z M 0.011 11.533 L -0.976 11.372 C -1.033 11.722 -0.988 12.082 -0.844 12.407 L 0.071 12.004 L 0.986 11.6 C 0.999 11.63 1.003 11.663 0.998 11.695 L 0.011 11.533 Z M 0.071 12.004 L -0.844 12.407 C -0.701 12.732 -0.466 13.009 -0.169 13.203 L 0.378 12.366 L 0.924 11.528 C 0.951 11.546 0.973 11.571 0.986 11.6 L 0.071 12.004 Z M 0.378 12.366 L -0.169 13.203 C 0.129 13.397 0.477 13.501 0.832 13.501 L 0.833 12.501 L 0.833 11.501 C 0.866 11.501 0.897 11.51 0.924 11.528 L 0.378 12.366 Z M 0.833 12.501 L 0.833 13.501 L 14.166 13.501 L 14.166 12.501 L 14.166 11.501 L 0.833 11.501 L 0.833 12.501 Z M 14.166 12.501 L 14.166 13.501 C 14.521 13.501 14.869 13.398 15.167 13.204 L 14.621 12.366 L 14.076 11.528 C 14.103 11.51 14.134 11.501 14.167 11.501 L 14.166 12.501 Z M 14.621 12.366 L 15.167 13.204 C 15.465 13.01 15.7 12.734 15.843 12.409 L 14.929 12.005 L 14.014 11.6 C 14.027 11.571 14.049 11.546 14.076 11.528 L 14.621 12.366 Z M 14.929 12.005 L 15.843 12.409 C 15.987 12.084 16.033 11.725 15.976 11.374 L 14.989 11.534 L 14.002 11.694 C 13.997 11.662 14.001 11.63 14.014 11.6 L 14.929 12.005 Z M 14.989 11.534 L 15.976 11.374 C 15.919 11.023 15.762 10.697 15.523 10.434 L 14.783 11.107 L 14.043 11.78 C 14.022 11.756 14.007 11.726 14.002 11.694 L 14.989 11.534 Z M 14.783 11.107 L 15.501 10.41 C 14.946 9.838 14.484 9.354 14.13 8.604 C 13.777 7.857 13.5 6.771 13.5 5 L 12.5 5 L 11.5 5 C 11.5 6.98 11.81 8.376 12.322 9.458 C 12.832 10.539 13.512 11.232 14.065 11.803 L 14.783 11.107 Z M 12.5 5 L 13.5 5 C 13.5 3.409 12.868 1.883 11.742 0.758 L 11.035 1.465 L 10.328 2.172 C 11.078 2.922 11.5 3.939 11.5 5 L 12.5 5 Z M 11.035 1.465 L 11.742 0.758 C 10.617 -0.368 9.091 -1 7.5 -1 L 7.5 0 L 7.5 1 C 8.56 1 9.578 1.421 10.328 2.172 L 11.035 1.465 Z M 7.5 0 L 7.5 -1 C 5.908 -1 4.382 -0.368 3.257 0.758 L 3.964 1.465 L 4.671 2.172 C 5.421 1.421 6.439 1 7.5 1 L 7.5 0 Z M 3.964 1.465 L 3.257 0.758 C 2.132 1.883 1.499 3.409 1.499 5 L 2.499 5 L 3.499 5 C 3.499 3.939 3.921 2.922 4.671 2.172 L 3.964 1.465 Z M 2.499 5 L 1.499 5 C 1.499 6.77 1.222 7.857 0.869 8.604 C 0.515 9.354 0.053 9.838 -0.501 10.41 L 0.218 11.106 L 0.936 11.802 C 1.488 11.232 2.167 10.538 2.677 9.458 C 3.189 8.376 3.499 6.98 3.499 5 L 2.499 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text4 ?? "Alerts")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 15,
    viewBox: "0 0 11.668 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.166,
      top: 2.5,
      width: 11.668,
      height: 15,
      color: "rgb(136,136,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.668 15 C 10.668 15.552 11.116 16 11.668 16 C 12.22 16 12.668 15.552 12.668 15 L 11.668 15 L 10.668 15 Z M 8.334 10 L 8.334 9 L 8.334 10 Z M 3.334 10 L 3.334 9 L 3.334 10 Z M 0 13.333 L -1 13.333 L 0 13.333 Z M -1 15 C -1 15.552 -0.552 16 0 16 C 0.552 16 1 15.552 1 15 L 0 15 L -1 15 Z M 11.668 15 L 12.668 15 L 12.668 13.333 L 11.668 13.333 L 10.668 13.333 L 10.668 15 L 11.668 15 Z M 11.668 13.333 L 12.668 13.333 C 12.668 12.184 12.211 11.082 11.399 10.269 L 10.692 10.976 L 9.985 11.683 C 10.422 12.121 10.668 12.715 10.668 13.333 L 11.668 13.333 Z M 10.692 10.976 L 11.399 10.269 C 10.586 9.457 9.484 9 8.334 9 L 8.334 10 L 8.334 11 C 8.953 11 9.547 11.246 9.985 11.683 L 10.692 10.976 Z M 8.334 10 L 8.334 9 L 3.334 9 L 3.334 10 L 3.334 11 L 8.334 11 L 8.334 10 Z M 3.334 10 L 3.334 9 C 2.184 9 1.082 9.457 0.269 10.269 L 0.976 10.976 L 1.683 11.683 C 2.121 11.246 2.715 11 3.334 11 L 3.334 10 Z M 0.976 10.976 L 0.269 10.269 C -0.543 11.082 -1 12.184 -1 13.333 L 0 13.333 L 1 13.333 C 1 12.715 1.246 12.121 1.683 11.683 L 0.976 10.976 Z M 0 13.333 L -1 13.333 L -1 15 L 0 15 L 1 15 L 1 13.333 L 0 13.333 Z M 9.168 3.333 L 8.168 3.333 C 8.168 4.622 7.123 5.667 5.834 5.667 L 5.834 6.667 L 5.834 7.667 C 8.227 7.667 10.168 5.727 10.168 3.333 L 9.168 3.333 Z M 5.834 6.667 L 5.834 5.667 C 4.545 5.667 3.5 4.622 3.5 3.333 L 2.5 3.333 L 1.5 3.333 C 1.5 5.727 3.441 7.667 5.834 7.667 L 5.834 6.667 Z M 2.5 3.333 L 3.5 3.333 C 3.5 2.045 4.545 1 5.834 1 L 5.834 0 L 5.834 -1 C 3.441 -1 1.5 0.94 1.5 3.333 L 2.5 3.333 Z M 5.834 0 L 5.834 1 C 7.123 1 8.168 2.045 8.168 3.333 L 9.168 3.333 L 10.168 3.333 C 10.168 0.94 8.227 -1 5.834 -1 L 5.834 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, "Profile")));
}
Object.assign(__ds_scope, { NavigationBottomNavBar, __ds_default_components_navigation_NavigationBottomNavBar_f9m720: NavigationBottomNavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationBottomNavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationTabBar.jsx
try { (() => {
// figma node: 380:629 Navigation/Tab Bar
function NavigationTabBar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      height: 44,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(253,200,48)",
      borderRight: "1px solid rgb(253,200,48)",
      borderBottom: "3px solid rgb(253,200,48)",
      borderLeft: "1px solid rgb(253,200,48)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "Orders")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(136,136,136)",
      flexShrink: 0
    }
  }, props.text2 ?? "History")));
}
Object.assign(__ds_scope, { NavigationTabBar, __ds_default_components_navigation_NavigationTabBar_1cz8hn9: NavigationTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationTopAppBar.jsx
try { (() => {
// figma node: 380:628 Navigation/Top App Bar
function NavigationTopAppBar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 56,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1.500,
    viewBox: "0 -0.750 16 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 1.5,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1.500,
    viewBox: "0 -0.750 16 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 12,
      width: 16,
      height: 1.5,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1.500,
    viewBox: "0 -0.750 16 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 19,
      width: 16,
      height: 1.5,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, props.text1 ?? "rapido"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: "rgb(253,200,48)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 15.001,
    viewBox: "0 0 13.500 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 1.499,
      width: 13.5,
      height: 15.001,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.316 13.751 C 6.04 13.273 5.428 13.109 4.95 13.385 C 4.472 13.661 4.308 14.273 4.584 14.751 L 5.45 14.251 L 6.316 13.751 Z M 8.914 14.751 C 9.19 14.273 9.026 13.661 8.548 13.385 C 8.07 13.109 7.458 13.273 7.182 13.751 L 8.048 14.251 L 8.914 14.751 Z M 0.196 9.995 L -0.522 9.3 L -0.533 9.31 L -0.543 9.321 L 0.196 9.995 Z M 0.749 11.251 L 0.749 12.251 L 0.749 12.251 L 0.749 11.251 Z M 12.75 11.251 L 12.75 10.251 L 12.75 10.251 L 12.75 11.251 Z M 13.305 9.996 L 14.044 9.323 L 14.034 9.311 L 14.023 9.3 L 13.305 9.996 Z M 6.75 0 L 6.75 -1 L 6.75 0 Z M 2.249 4.5 L 1.249 4.5 L 2.249 4.5 Z M 5.45 14.251 L 4.584 14.751 C 4.803 15.131 5.119 15.447 5.499 15.666 L 5.999 14.8 L 6.499 13.934 C 6.423 13.89 6.36 13.827 6.316 13.751 L 5.45 14.251 Z M 5.999 14.8 L 5.499 15.666 C 5.879 15.886 6.31 16.001 6.749 16.001 L 6.749 15.001 L 6.749 14.001 C 6.661 14.001 6.575 13.978 6.499 13.934 L 5.999 14.8 Z M 6.749 15.001 L 6.749 16.001 C 7.188 16.001 7.619 15.886 7.999 15.666 L 7.499 14.8 L 6.999 13.934 C 6.923 13.978 6.837 14.001 6.749 14.001 L 6.749 15.001 Z M 7.499 14.8 L 7.999 15.666 C 8.379 15.447 8.695 15.131 8.914 14.751 L 8.048 14.251 L 7.182 13.751 C 7.138 13.827 7.075 13.89 6.999 13.934 L 7.499 14.8 Z M 0.196 9.995 L -0.543 9.321 C -0.771 9.572 -0.922 9.884 -0.977 10.218 L 0.01 10.38 L 0.997 10.541 C 0.989 10.589 0.967 10.634 0.935 10.669 L 0.196 9.995 Z M 0.01 10.38 L -0.977 10.218 C -1.032 10.553 -0.988 10.896 -0.851 11.207 L 0.064 10.803 L 0.979 10.4 C 0.998 10.444 1.005 10.493 0.997 10.541 L 0.01 10.38 Z M 0.064 10.803 L -0.851 11.207 C -0.714 11.517 -0.49 11.781 -0.206 11.967 L 0.34 11.129 L 0.887 10.292 C 0.927 10.318 0.959 10.356 0.979 10.4 L 0.064 10.803 Z M 0.34 11.129 L -0.206 11.967 C 0.078 12.152 0.41 12.251 0.749 12.251 L 0.749 11.251 L 0.75 10.251 C 0.799 10.251 0.846 10.265 0.887 10.292 L 0.34 11.129 Z M 0.749 11.251 L 0.749 12.251 L 12.75 12.251 L 12.75 11.251 L 12.75 10.251 L 0.749 10.251 L 0.749 11.251 Z M 12.75 11.251 L 12.749 12.251 C 13.089 12.251 13.42 12.153 13.705 11.968 L 13.159 11.13 L 12.614 10.291 C 12.654 10.265 12.702 10.251 12.75 10.251 L 12.75 11.251 Z M 13.159 11.13 L 13.705 11.968 C 13.989 11.783 14.213 11.519 14.35 11.209 L 13.436 10.804 L 12.521 10.4 C 12.541 10.356 12.573 10.318 12.614 10.291 L 13.159 11.13 Z M 13.436 10.804 L 14.35 11.209 C 14.488 10.899 14.532 10.555 14.477 10.221 L 13.49 10.381 L 12.503 10.541 C 12.495 10.493 12.502 10.444 12.521 10.4 L 13.436 10.804 Z M 13.49 10.381 L 14.477 10.221 C 14.423 9.886 14.273 9.574 14.044 9.323 L 13.305 9.996 L 12.565 10.669 C 12.532 10.633 12.511 10.589 12.503 10.541 L 13.49 10.381 Z M 13.305 9.996 L 14.023 9.3 C 13.523 8.785 13.118 8.359 12.807 7.701 C 12.497 7.045 12.25 6.083 12.25 4.5 L 11.25 4.5 L 10.25 4.5 C 10.25 6.292 10.531 7.564 10.999 8.555 C 11.466 9.544 12.089 10.179 12.587 10.692 L 13.305 9.996 Z M 11.25 4.5 L 12.25 4.5 C 12.25 3.042 11.67 1.643 10.639 0.611 L 9.932 1.318 L 9.225 2.025 C 9.881 2.682 10.25 3.572 10.25 4.5 L 11.25 4.5 Z M 9.932 1.318 L 10.639 0.611 C 9.607 -0.42 8.208 -1 6.75 -1 L 6.75 0 L 6.75 1 C 7.678 1 8.568 1.369 9.225 2.025 L 9.932 1.318 Z M 6.75 0 L 6.75 -1 C 5.291 -1 3.892 -0.42 2.86 0.611 L 3.568 1.318 L 4.275 2.025 C 4.931 1.369 5.821 1 6.75 1 L 6.75 0 Z M 3.568 1.318 L 2.86 0.611 C 1.829 1.643 1.249 3.042 1.249 4.5 L 2.249 4.5 L 3.249 4.5 C 3.249 3.572 3.618 2.682 4.275 2.025 L 3.568 1.318 Z M 2.249 4.5 L 1.249 4.5 C 1.249 6.083 1.002 7.045 0.692 7.701 C 0.381 8.359 -0.024 8.785 -0.522 9.3 L 0.196 9.995 L 0.914 10.691 C 1.411 10.178 2.033 9.544 2.5 8.555 C 2.968 7.564 3.249 6.292 3.249 4.5 L 2.249 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { NavigationTopAppBar, __ds_default_components_navigation_NavigationTopAppBar_d6ywvm: NavigationTopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationTopAppBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rider-app/BookingsScreen.jsx
try { (() => {
// Bookings — ongoing rides and history.
const ONGOING = [{
  type: "Bike Ride",
  id: "RD1748392045",
  pickup: "12th Main, Indiranagar, Bangalore - 560008",
  drop: "MG Road, Bangalore - 560001",
  km: "5.2",
  min: "14"
}, {
  type: "Auto Ride",
  id: "AR1748392046",
  pickup: "Koramangala 4th Block, Bangalore - 560034",
  drop: "HSR Layout, Bangalore - 560102",
  km: "6.8",
  min: "18"
}];
const HISTORY = [{
  type: "Bike Ride",
  id: "RD1748391980",
  fare: "₹85.00",
  status: "Completed",
  when: "Today, 11:24 AM",
  pickup: "BTM Layout, Bangalore",
  drop: "Silk Board, Bangalore"
}, {
  type: "Auto Ride",
  id: "AR1748391944",
  fare: "₹65.00",
  status: "Completed",
  when: "Today, 10:02 AM",
  pickup: "HSR Layout, Bangalore",
  drop: "Koramangala, Bangalore"
}, {
  type: "Bike Ride",
  id: "RD1748391902",
  fare: "₹0.00",
  status: "Cancelled",
  when: "Today, 09:40 AM",
  pickup: "Jayanagar, Bangalore",
  drop: "JP Nagar, Bangalore"
}];
function BookingRow({
  b,
  started,
  onStart
}) {
  const NS = window.RapidoDesignSystem_ef9315 || {};
  const {
    ButtonPrimary,
    ButtonSecondary
  } = NS;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "14px 16px 12px"
    }
  }, /*#__PURE__*/React.createElement(IconBubble, {
    name: "User",
    tint: "var(--rapido-yellow-light)",
    color: "var(--rapido-black)",
    size: 40,
    iconSize: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 15px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, b.type), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1.2 var(--font-family-base)",
      color: "var(--gray-500)"
    }
  }, "ID: ", b.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "3px 9px",
      borderRadius: 999,
      background: started ? "var(--rapido-yellow)" : "var(--success-light)",
      font: "500 12px/1.2 var(--font-family-base)",
      color: started ? "var(--rapido-black)" : "var(--success)"
    }
  }, started ? "Ongoing" : "Accepted"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "CreditCard",
    size: 15,
    color: "var(--gray-600)"
  }), "Cash"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...hairline,
      marginLeft: 16,
      marginRight: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement(RouteRail, {
    height: 70
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 13px/1.2 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Pickup"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.35 var(--font-family-base)",
      color: "var(--text-primary)",
      marginTop: 2
    }
  }, b.pickup)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 13px/1.2 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Drop"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.35 var(--font-family-base)",
      color: "var(--text-primary)",
      marginTop: 2
    }
  }, b.drop))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 15px/1 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, b.km, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "km")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, b.min, " min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "0 16px 16px"
    }
  }, ButtonSecondary ? /*#__PURE__*/React.createElement(ButtonSecondary, {
    text1: "Navigate",
    style: {
      flex: 1,
      gap: 8
    }
  }) : null, ButtonPrimary ? /*#__PURE__*/React.createElement(ButtonPrimary, {
    text1: started ? "End Ride" : "Start Ride",
    style: {
      flex: 1,
      cursor: "pointer"
    },
    onClick: onStart
  }) : null));
}
function BookingsScreen() {
  const [tab, setTab] = React.useState("Ongoing");
  const [started, setStarted] = React.useState({});
  const NS = window.RapidoDesignSystem_ef9315 || {};
  const {
    BadgeCompleted,
    BadgeCancelled
  } = NS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleHeader, {
    title: "Bookings",
    action: /*#__PURE__*/React.createElement(Icon, {
      name: "Funnel",
      size: 21,
      strokeWidth: 1.9,
      color: "var(--rapido-black)"
    })
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Ongoing", "History"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: scrollArea
  }, tab === "Ongoing" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 14px",
      borderRadius: "var(--radius-md)",
      background: "var(--rapido-yellow-light)"
    }
  }, /*#__PURE__*/React.createElement(IconBubble, {
    name: "ShieldCheck",
    tint: "var(--rapido-yellow)",
    color: "var(--rapido-black)",
    size: 36,
    iconSize: 19
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 14px/1.25 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Keep completing orders to earn more"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.25 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Your performance is great!")), /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 18px/1.3 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Ongoing Bookings"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: "center",
      padding: "3px 10px",
      borderRadius: 999,
      background: "var(--rapido-yellow)",
      font: "700 13px/1.3 var(--font-family-base)",
      color: "var(--rapido-black)"
    }
  }, ONGOING.length)), ONGOING.map(b => /*#__PURE__*/React.createElement(BookingRow, {
    key: b.id,
    b: b,
    started: !!started[b.id],
    onStart: () => setStarted(s => ({
      ...s,
      [b.id]: !s[b.id]
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 18px/1.3 var(--font-family-base)",
      color: "var(--text-primary)",
      paddingTop: 4
    }
  }, "Upcoming Bookings"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      padding: "34px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconBubble, {
    name: "Calendar",
    tint: "var(--gray-200)",
    color: "var(--gray-500)",
    size: 52,
    iconSize: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 15px/1.3 var(--font-family-base)",
      color: "var(--gray-700)"
    }
  }, "No upcoming bookings"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.3 var(--font-family-base)",
      color: "var(--gray-500)"
    }
  }, "New bookings will appear here"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16
    }
  }, HISTORY.map(h => /*#__PURE__*/React.createElement(Card, {
    key: h.id,
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, h.status === "Completed" ? BadgeCompleted ? /*#__PURE__*/React.createElement(BadgeCompleted, null) : null : BadgeCancelled ? /*#__PURE__*/React.createElement(BadgeCancelled, null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 18px/1 var(--font-family-base)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, h.fare)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RouteRail, {
    height: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, h.pickup), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, h.drop))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 12px/1 var(--font-family-base)",
      color: "var(--gray-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, h.type, " \xB7 ID: ", h.id), /*#__PURE__*/React.createElement("span", null, h.when)))))));
}
Object.assign(window, {
  BookingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rider-app/BookingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rider-app/EarningsScreen.jsx
try { (() => {
// Earnings — daily / weekly / monthly ledger.
const EARNINGS_TX = [{
  title: "Ride fare",
  time: "11:24 AM",
  amount: "+ ₹85.00",
  positive: true,
  icon: "IndianRupee",
  tint: "var(--success-light)",
  color: "var(--success)"
}, {
  title: "Ride fare",
  time: "10:02 AM",
  amount: "+ ₹65.00",
  positive: true,
  icon: "IndianRupee",
  tint: "var(--success-light)",
  color: "var(--success)"
}, {
  title: "Incentive",
  time: "09:15 AM",
  amount: "+ ₹40.50",
  positive: true,
  icon: "Gift",
  tint: "var(--warning-light)",
  color: "var(--rapido-yellow-dark)"
}, {
  title: "Deduction",
  time: "08:55 AM",
  amount: "- ₹0.00",
  positive: false,
  icon: "Percent",
  tint: "var(--error-light)",
  color: "var(--error)"
}];
const EARNINGS_TOTALS = {
  Daily: {
    total: "₹2,340.50",
    date: "Today, 24 May",
    rows: [["Total Fare", "₹2,120.00", null], ["Incentives", "₹120.50", "var(--success)"], ["Other earnings", "₹100.00", null], ["Deductions", "-₹0.00", "var(--error)"]]
  },
  Weekly: {
    total: "₹4,680.25",
    date: "18 – 24 May",
    rows: [["Total Fare", "₹4,210.00", null], ["Incentives", "₹320.25", "var(--success)"], ["Other earnings", "₹150.00", null], ["Deductions", "-₹0.00", "var(--error)"]]
  },
  Monthly: {
    total: "₹26,430.50",
    date: "May 2026",
    rows: [["Total Fare", "₹24,180.00", null], ["Incentives", "₹1,850.50", "var(--success)"], ["Other earnings", "₹400.00", null], ["Deductions", "-₹0.00", "var(--error)"]]
  }
};
function EarningsScreen({
  onBack
}) {
  const [tab, setTab] = React.useState("Daily");
  const [open, setOpen] = React.useState(false);
  const d = EARNINGS_TOTALS[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleHeader, {
    title: "Earnings",
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(Icon, {
      name: "CircleQuestionMark",
      size: 22,
      strokeWidth: 2,
      color: "var(--rapido-black)"
    })
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Daily", "Weekly", "Monthly"],
    value: tab,
    onChange: t => {
      setTab(t);
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: scrollArea
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 20,
    color: "var(--gray-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Calendar",
    size: 19,
    strokeWidth: 1.9,
    color: "var(--rapido-black)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 16px/1 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, d.date), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 17,
    color: "var(--gray-600)"
  })), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 20,
    color: "var(--gray-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "22px 0 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 36px/1.1 var(--font-family-base)",
      color: "var(--text-primary)",
      letterSpacing: "-0.5px",
      fontVariantNumeric: "tabular-nums"
    }
  }, d.total), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 16px/1.5 var(--font-family-base)",
      color: "var(--gray-600)",
      marginTop: 4
    }
  }, "Total Earnings")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "6px 16px 8px"
    }
  }, d.rows.map(([k, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "13px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 15px/1.3 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 15px/1.3 var(--font-family-base)",
      color: c || "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: hairline
  }), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0 4px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [["Base fare", "₹1,760.00"], ["Distance (32.4 km)", "₹280.00"], ["Waiting time", "₹80.00"], ["Surge", "₹0.00"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 13px/1.3 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, v)))) : null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      width: "100%",
      padding: "14px 0 10px",
      font: "500 15px/1 var(--font-family-base)",
      color: "var(--text-link)"
    }
  }, open ? "Hide details" : "View details", /*#__PURE__*/React.createElement(Icon, {
    name: open ? "ChevronUp" : "ChevronDown",
    size: 17,
    color: "var(--text-link)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 16px 20px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Recent Transactions",
    action: "View all",
    onAction: () => {}
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden"
    }
  }, EARNINGS_TX.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...hairline,
      marginLeft: 16
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement(IconBubble, {
    name: t.icon,
    tint: t.tint,
    color: t.color,
    size: 40,
    iconSize: 19
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 15px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1.2 var(--font-family-base)",
      color: "var(--gray-500)"
    }
  }, t.time)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 15px/1 var(--font-family-base)",
      color: t.positive ? "var(--success)" : "var(--error)",
      fontVariantNumeric: "tabular-nums"
    }
  }, t.amount))))))));
}
Object.assign(window, {
  EarningsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rider-app/EarningsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rider-app/HomeScreen.jsx
try { (() => {
// Home — the Captain's online/offline hub. Recreated from the source screen
// reference (Figma page "1. Screen reference", frame "Rapido rider app UI").
function HomeScreen({
  online,
  setOnline
}) {
  const [tab, setTab] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BrandHeader, null), /*#__PURE__*/React.createElement("div", {
    style: scrollArea
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0 16px 16px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      padding: "14px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.25,
      padding: "0 16px",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Earnings"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 24px/1.15 var(--font-family-base)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B92,340.50"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Today ", /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 14,
    color: "var(--gray-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-card)",
      margin: "2px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "0 12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 16px/1.2 var(--font-family-base)",
      color: "var(--success)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B9120.50"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Incentives"), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 15,
    color: "var(--gray-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-card)",
      margin: "2px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 0.85,
      padding: "0 12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 16px/1.2 var(--font-family-base)",
      color: "var(--info)"
    }
  }, "4"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Rides"), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 15,
    color: "var(--gray-500)"
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 14
    },
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/badge-incentive-helmet.png",
    alt: "",
    style: {
      width: 42,
      height: 42,
      borderRadius: "50%",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/1.3 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Complete 5 more rides to get \u20B9250"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      background: "var(--gray-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "20%",
      height: "100%",
      background: "var(--info)",
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 13px/1 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "1 / 5"))), /*#__PURE__*/React.createElement(Chevron, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 262,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/map-bangalore.png",
    alt: "Live map \u2014 Koramangala, HSR Layout, BTM Layout, Silk Board",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: online ? "var(--success)" : "var(--gray-400)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 16px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, online ? "You are Online" : "You are Offline"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1.3 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, online ? "You will receive ride requests" : "Go online to receive ride requests")), /*#__PURE__*/React.createElement(Toggle, {
    on: online,
    onChange: setOnline
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, [["Today's target", "₹500", "var(--success)"], ["Time left", "12h 45m", "var(--info)"]].map(([k, v, c]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    style: {
      flex: 1,
      padding: "14px 14px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    },
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, k), /*#__PURE__*/React.createElement(Chevron, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 18px/1 var(--font-family-base)",
      color: c,
      fontVariantNumeric: "tabular-nums"
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "14px 12px 14px 16px",
      overflow: "hidden"
    },
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 16px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Refer & Earn"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.3 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, "Refer a friend and earn \u20B9750")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/illustration-refer-earn.png",
    alt: "",
    style: {
      height: 54,
      width: "auto",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(Chevron, null)))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rider-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rider-app/MoreScreen.jsx
try { (() => {
// More — the Captain's account hub.
const MENU = [{
  icon: "CarTaxiFront",
  title: "My Vehicles",
  sub: "1 Vehicle added"
}, {
  icon: "FileText",
  title: "Documents",
  sub: "All documents are verified"
}, {
  icon: "Landmark",
  title: "Bank Details",
  sub: "*******3467"
}, {
  icon: "Gift",
  title: "Refer & Earn",
  sub: "Earn up to ₹750 for each referral"
}, {
  icon: "CircleQuestionMark",
  title: "Help & Support",
  sub: "Get help with your queries"
}, {
  icon: "ShieldCheck",
  title: "Safety Toolkit",
  sub: "Safety tips & emergency contacts"
}, {
  icon: "Settings",
  title: "Settings",
  sub: "App, account & privacy settings"
}];
function MoreScreen({
  onGoEarnings
}) {
  const [copied, setCopied] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BrandHeader, null), /*#__PURE__*/React.createElement("div", {
    style: scrollArea
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0 16px 20px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 12px 14px 14px"
    },
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/avatar-captain.png",
    alt: "Ramesh Kumar",
    style: {
      width: 62,
      height: 62,
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      background: "var(--gray-100)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 2,
      bottom: 2,
      width: 13,
      height: 13,
      borderRadius: "50%",
      background: "var(--success)",
      boxShadow: "0 0 0 2px #fff"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 20px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Ramesh Kumar"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Star",
    size: 16,
    color: "var(--rapido-yellow)",
    fill: "var(--rapido-yellow)",
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 15px/1 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "4.8")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 10px",
      borderRadius: "var(--radius-md)",
      background: "var(--gray-100)",
      font: "400 13px/1 var(--font-family-base)",
      color: "var(--gray-800)"
    }
  }, copied ? "Copied" : "Captain ID: RP1234567", /*#__PURE__*/React.createElement(Icon, {
    name: "Copy",
    size: 14,
    color: "var(--gray-600)"
  }))), /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      borderRadius: "var(--radius-md)",
      background: "var(--rapido-yellow-light)",
      padding: "16px 0"
    }
  }, [["Total Earnings", "₹26,430.50", "View details"], ["Rapido Wallet", "₹560.50", "Balance"]].map(([k, v, s], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, i ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "rgba(0,0,0,.08)"
    }
  }) : null, /*#__PURE__*/React.createElement("button", {
    onClick: i ? undefined : onGoEarnings,
    style: {
      all: "unset",
      cursor: "pointer",
      flex: 1,
      padding: "0 14px",
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/1.2 var(--font-family-base)",
      color: "var(--gray-700)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 20px/1.2 var(--font-family-base)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 17,
    color: "var(--gray-600)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.2 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, s))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      overflow: "hidden"
    }
  }, MENU.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: m.title
  }, i ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...hairline,
      marginLeft: 16,
      marginRight: 16
    }
  }) : null, /*#__PURE__*/React.createElement("button", {
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 14px",
      width: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 23,
    strokeWidth: 1.8,
    color: "var(--rapido-black)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 15px/1.2 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, m.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.2 var(--font-family-base)",
      color: "var(--gray-600)"
    }
  }, m.sub)), /*#__PURE__*/React.createElement(Chevron, null))))))));
}
Object.assign(window, {
  MoreScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rider-app/MoreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rider-app/NotificationsScreen.jsx
try { (() => {
// Notifications — New / Earlier feed.
const NEW_NOTIFS = [{
  title: "Incentive unlocked!",
  body: "You have unlocked a new incentive. Complete 5 more rides to get ₹250 extra.",
  time: "2 min ago",
  icon: "Bell",
  tint: "var(--rapido-yellow-light)",
  color: "var(--rapido-yellow-dark)"
}, {
  title: "Payment received",
  body: "₹560.50 has been added to your Rapido wallet.",
  time: "10 min ago",
  icon: "Wallet",
  tint: "var(--success-light)",
  color: "var(--success)"
}, {
  title: "Refer & Earn",
  body: "Your friend completed their first ride. You earned ₹50.",
  time: "35 min ago",
  icon: "Gift",
  tint: "var(--info-light)",
  color: "var(--info)"
}];
const OLD_NOTIFS = [{
  title: "Maintenance update",
  body: "Rapido app maintenance is scheduled on 26 May 2:00 AM to 4:00 AM.",
  time: "Yesterday, 8:30 PM",
  icon: "Megaphone",
  tint: "var(--rapido-yellow-light)",
  color: "var(--rapido-yellow-dark)"
}, {
  title: "Safety reminder",
  body: "Always wear your helmet and follow traffic rules. Stay safe!",
  time: "Yesterday, 6:15 PM",
  icon: "Shield",
  tint: "var(--info-light)",
  color: "var(--info)"
}, {
  title: "Weekly earnings summary",
  body: "Your total earnings for this week is ₹4,680.25.",
  time: "Yesterday, 5:00 PM",
  icon: "IndianRupee",
  tint: "var(--success-light)",
  color: "var(--success)"
}, {
  title: "Great job!",
  body: "You completed 20 rides this week. Keep it up!",
  time: "23 May, 9:20 PM",
  icon: "Star",
  tint: "#F3E8FF",
  color: "#8B5CF6"
}];
function NotifRow({
  n,
  unread
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      display: "flex",
      justifyContent: "center",
      paddingTop: 26,
      flexShrink: 0
    }
  }, unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--rapido-yellow)"
    }
  }) : null), /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "14px 12px 14px 14px"
    },
    onClick: () => {}
  }, /*#__PURE__*/React.createElement(IconBubble, {
    name: n.icon,
    tint: n.tint,
    color: n.color,
    size: 44,
    iconSize: 21
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 15px/1.25 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/1.4 var(--font-family-base)",
      color: "var(--gray-700)",
      textWrap: "pretty"
    }
  }, n.body), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1.2 var(--font-family-base)",
      color: "var(--gray-500)",
      marginTop: 2
    }
  }, n.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(Chevron, null))));
}
function NotificationsScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BrandHeader, null), /*#__PURE__*/React.createElement("div", {
    style: scrollArea
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 28px/36px var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Notifications")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 17px/1.3 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "New"), NEW_NOTIFS.map(n => /*#__PURE__*/React.createElement(NotifRow, {
    key: n.title,
    n: n,
    unread: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "10px 16px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 17px/1.3 var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, "Earlier"), OLD_NOTIFS.map(n => /*#__PURE__*/React.createElement(NotifRow, {
    key: n.title,
    n: n
  })))));
}
Object.assign(window, {
  NotificationsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rider-app/NotificationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rider-app/kit.jsx
try { (() => {
// Rapido Rider (Captain) app — shared kit surfaces.
// Icons: Lucide via CDN (SUBSTITUTION — the source .fig carries icons only as
// flattened bitmaps inside the reference screenshots, so no real icon assets
// could be copied out. Lucide matches the outline style and ~1.75px stroke).
const R = React;
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.75,
  fill = "none",
  style
}) {
  const html = R.useMemo(() => {
    const L = window.lucide;
    const node = L && (L.icons && L.icons[name] || L[name]);
    if (!node) return "";
    const el = L.createElement(node);
    el.setAttribute("width", size);
    el.setAttribute("height", size);
    el.setAttribute("stroke-width", strokeWidth);
    el.setAttribute("fill", fill);
    return el.outerHTML;
  }, [name, size, strokeWidth, fill]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
const kitCard = {
  background: "var(--surface-card)",
  borderRadius: "var(--radius-card)",
  boxShadow: "inset 0 0 0 1px var(--border-card)"
};
const hairline = {
  height: 1,
  background: "var(--border-card)",
  alignSelf: "stretch",
  flexShrink: 0
};
function Card({
  children,
  style,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      ...kitCard,
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, children);
}
function Chevron({
  size = 18
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: size,
    color: "var(--gray-500)"
  });
}

/* Centred brand header — Home, Notifications, More.
   The wordmark is the kit's own bitmap, cropped from the source screens. */
function BrandHeader({
  onMenu,
  badge = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "6px 18px 10px",
      background: "var(--surface-page)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      width: 28,
      height: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Menu",
    size: 22,
    strokeWidth: 2.2,
    color: "var(--rapido-black)"
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/logo-rapido-captain.png",
    alt: "rapido Captain",
    style: {
      height: 44,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 22,
    strokeWidth: 2,
    color: "var(--rapido-black)"
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      right: -4,
      minWidth: 16,
      height: 16,
      padding: "0 4px",
      borderRadius: 999,
      background: "var(--error)",
      color: "#fff",
      font: "700 10px/16px var(--font-family-base)",
      textAlign: "center"
    }
  }, badge) : null));
}

/* Title header — Earnings, Bookings. */
function TitleHeader({
  title,
  onBack,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "6px 18px 12px",
      background: "var(--surface-page)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 24,
    strokeWidth: 2.2,
    color: "var(--rapido-black)"
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      font: "700 20px/28px var(--font-family-base)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, action));
}

/* Segmented tabs — active tab is black Bold over a 2px yellow underline. */
function Tabs({
  items,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--border-card)",
      flexShrink: 0
    }
  }, items.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange(t),
      style: {
        all: "unset",
        cursor: "pointer",
        flex: 1,
        textAlign: "center",
        padding: "12px 0 10px",
        position: "relative",
        font: `${on ? 700 : 400} 15px/20px var(--font-family-base)`,
        color: on ? "var(--text-primary)" : "var(--gray-500)"
      }
    }, t, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: -1,
        height: 2,
        background: "var(--rapido-yellow)",
        borderRadius: 2
      }
    }) : null);
  }));
}

/* Circular tinted icon holder used by notification, transaction and menu rows. */
function IconBubble({
  name,
  tint,
  color,
  size = 40,
  iconSize = 20,
  fill = "none"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: iconSize,
    color: color,
    strokeWidth: 2,
    fill: fill
  }));
}
const NAV = [{
  id: "home",
  label: "Home",
  icon: "House"
}, {
  id: "earnings",
  label: "Earnings",
  icon: "Wallet"
}, {
  id: "bookings",
  label: "Bookings",
  icon: "ReceiptText"
}, {
  id: "notifications",
  label: "Notifications",
  icon: "Bell",
  badge: 3
}, {
  id: "more",
  label: "More",
  icon: "Ellipsis"
}];
function BottomNav({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 6px 4px",
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-navbar)",
      flexShrink: 0
    }
  }, NAV.map(n => {
    const on = n.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onChange(n.id),
      style: {
        all: "unset",
        cursor: "pointer",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "4px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 22,
      strokeWidth: on ? 2.2 : 1.75,
      color: on ? "var(--rapido-yellow)" : "var(--gray-500)",
      fill: on ? "var(--rapido-yellow)" : "none"
    }), n.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -5,
        right: -8,
        minWidth: 15,
        height: 15,
        padding: "0 4px",
        borderRadius: 999,
        background: "var(--error)",
        color: "#fff",
        font: "700 9px/15px var(--font-family-base)",
        textAlign: "center"
      }
    }, n.badge) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? 600 : 400} 11px/1 var(--font-family-base)`,
        color: on ? "var(--rapido-yellow-dark)" : "var(--gray-500)"
      }
    }, n.label));
  }));
}

/* Section heading + optional text action, e.g. "Recent Transactions  View all". */
function SectionHead({
  title,
  action,
  onAction,
  size = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `700 ${size}px/1.35 var(--font-family-base)`,
      color: "var(--text-primary)"
    }
  }, title), action ? /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      all: "unset",
      cursor: "pointer",
      font: "500 14px/1 var(--font-family-base)",
      color: "var(--text-link)"
    }
  }, action) : null);
}

/* Pickup → drop rail: green circle, dashed connector, red square. */
function RouteRail({
  height = 62
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height,
      flexShrink: 0,
      paddingTop: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--route-pickup)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderLeft: "1.5px dashed var(--gray-300)",
      margin: "3px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      background: "var(--route-drop)",
      flexShrink: 0
    }
  }));
}
function Toggle({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!on),
    style: {
      all: "unset",
      cursor: "pointer",
      width: 52,
      height: 30,
      borderRadius: 999,
      background: on ? "var(--success)" : "var(--gray-300)",
      position: "relative",
      transition: "background .18s ease",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 25 : 3,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "#fff",
      transition: "left .18s ease",
      boxShadow: "0 1px 3px rgba(0,0,0,.18)"
    }
  }));
}

/* 390×844 phone frame with real iOS chrome from the kit's StatusBar component. */
function PhoneShell({
  children,
  dark = false
}) {
  const NS = window.RapidoDesignSystem_ef9315 || {};
  const {
    StatusBar
  } = NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
      fontFamily: "var(--font-family-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, StatusBar ? /*#__PURE__*/React.createElement(StatusBar, {
    darkMode: dark,
    dynamicIsland: false,
    dynIslSize: "n/a"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  })), children, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-page)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 5,
      borderRadius: 999,
      background: "var(--rapido-black)"
    }
  })));
}
const scrollArea = {
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  background: "var(--surface-page)"
};
Object.assign(window, {
  Icon,
  Card,
  Chevron,
  BrandHeader,
  TitleHeader,
  Tabs,
  IconBubble,
  BottomNav,
  SectionHead,
  RouteRail,
  Toggle,
  PhoneShell,
  kitCard,
  hairline,
  scrollArea,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rider-app/kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BadgeCancelled = __ds_scope.BadgeCancelled;

__ds_ns.BadgeCompleted = __ds_scope.BadgeCompleted;

__ds_ns.BadgeOngoing = __ds_scope.BadgeOngoing;

__ds_ns.ButtonPrimary = __ds_scope.ButtonPrimary;

__ds_ns.ButtonSecondary = __ds_scope.ButtonSecondary;

__ds_ns.ButtonSmall = __ds_scope.ButtonSmall;

__ds_ns.ButtonText = __ds_scope.ButtonText;

__ds_ns.CardBooking = __ds_scope.CardBooking;

__ds_ns.CardEarnings = __ds_scope.CardEarnings;

__ds_ns.CardProfileHeader = __ds_scope.CardProfileHeader;

__ds_ns.CardStat = __ds_scope.CardStat;

__ds_ns.HomeIndicatorDark = __ds_scope.HomeIndicatorDark;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.StatusBarBattery = __ds_scope.StatusBarBattery;

__ds_ns.StatusBarDynamicIsland = __ds_scope.StatusBarDynamicIsland;

__ds_ns.StatusBarTime = __ds_scope.StatusBarTime;

__ds_ns.InputSearch = __ds_scope.InputSearch;

__ds_ns.ListItemNotification = __ds_scope.ListItemNotification;

__ds_ns.ListItemTransaction = __ds_scope.ListItemTransaction;

__ds_ns.ChatBackground = __ds_scope.ChatBackground;

__ds_ns.IconAttachment = __ds_scope.IconAttachment;

__ds_ns.IconAudioCall = __ds_scope.IconAudioCall;

__ds_ns.IconCamera = __ds_scope.IconCamera;

__ds_ns.IconMicrophone = __ds_scope.IconMicrophone;

__ds_ns.IconPlus = __ds_scope.IconPlus;

__ds_ns.IconVideoCall = __ds_scope.IconVideoCall;

__ds_ns.Profile = __ds_scope.Profile;

__ds_ns.UIBottomBar = __ds_scope.UIBottomBar;

__ds_ns.UITitleBarAccount = __ds_scope.UITitleBarAccount;

__ds_ns.NavigationBottomNavBar = __ds_scope.NavigationBottomNavBar;

__ds_ns.NavigationTabBar = __ds_scope.NavigationTabBar;

__ds_ns.NavigationTopAppBar = __ds_scope.NavigationTopAppBar;

})();
