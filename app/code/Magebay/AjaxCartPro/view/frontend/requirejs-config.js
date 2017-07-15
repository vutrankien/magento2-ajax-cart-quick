var config = {
    map: {
        '*': {
			magebaySidebar: 'Magebay_AjaxCartPro/js/sidebar',
            catalogAddToCart: 'Magebay_AjaxCartPro/js/catalog-add-to-cart',
			catalogAddToCompare: 'Magebay_AjaxCartPro/js/catalog-add-to-compare'
        },
		'shim': {
    		'Magebay_AjaxCartPro/js/catalog-add-to-cart': ['catalogAddToCart'],
			'Magebay_AjaxCartPro/js/catalog-add-to-compare': ['mage/dataPost']
    	}
    }
};
