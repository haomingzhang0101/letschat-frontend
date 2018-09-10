window.app = {
	
	/**
	 * Backend service address.
	 */
	serverUrl: 'http://192.168.0.12:8888',
	
	/**
	 * Image server address.
	 */
	imgServerUrl: 'http://192.168.0.18:88/haoming/',
	
	/**
	 * Identify whether given string is empty or not.
	 * @param {Object} str
	 */
	isNotNull: function(str) {
		if (str != null && str != "" && str != undefined) {
			return true;
		}
		return false;
	},
	
	/**
	 * Message prompt box.
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast: function(msg, type) {
		plus.nativeUI.toast(msg, 
			{icon: "image/" + type + ".png", verticalAlign: "center"});
	},
	
	/**
	 *  Save current user's global object.
	 * @param {Object} user
	 */
	setUserGlobalInfo: function(user) {
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo", userInfoStr);
	},
	
	/**
	 *  Acquire current user's global object.
	 */
	getUserGlobalInfo: function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},
	
	/**
	 *  Remove current user's global object.
	 */
	userLogout: function() {
		plus.storage.removeItem("userInfo");
	}
}
