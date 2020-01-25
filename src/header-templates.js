const _findHealthInsuranceData = [{
	name: `Individual & Family`,
	links: [{
			text: `Individual & Family Health Insurance`,
			url: `/individual-family-health-insurance`,
			'data-wa': `Click: Individual & Family Health Insurance`
		},
		{
			text: `Short-term Health Insurance`,
			url: `/short-term-health-insurance`,
			'data-wa': `Click: Short-term Health Insurance`
		},
		{
			text: `Dental Insurance`,
			url: `/dental-insurance`,
			'data-wa': `Click: Dental Insurance`
		},
		{
			text: `Vision Insurance`,
			url: `/vision-insurance`,
			'data-wa': `Click: Vision Insurance`
		},
	]
}, {
	name: `Medicare`,
	links: [{
			url: "/medicare",
			text: "Medicare Insurance",
			'data-wa': `Click: Medicare Insurance`
		},
		{
			url: "/medicare/advantage-all/medicare-advantage",
			text: "Medicare Advantage",
			'data-wa': `Click: Medicare Advantage`
		},
		{
			url: "/medicare/supplement-all/medicare-supplement-plans",
			text: "Medicare Supplement",
			'data-wa': `Click: Medicare Supplement`
		},
		{
			url: "/medicare/part-d-all/medicare-part-d-prescription-drug-coverage",
			text: "Medicare Part D",
			'data-wa': `Click: Medicare Part D`
		},
	]
}, {
	name: `Small Business`,
	links: [{
			url: "/small-business-health-insurance",
			text: "Small Business Health Insurance",
			'data-wa': `Click: Small Business Health Insurance`
		},
		{
			url: "/group-dental-insurance",
			text: "Group Dental Insurance",
			'data-wa': `Click: Group Dental Insurance`
		},
		{
			url: "/group-vision-insurance",
			text: "Group Vision Insurance",
			'data-wa': `Click: Group Vision Insurance`
		},
	]
}, {
	name: `Other Insurance Products`,
	links: [{
			url: "/supplemental-health-insurance",
			text: "GAP Insurance",
			'data-wa': `Click: GAP Insurance`
		},
		{
			url: "/medical-indemnity-insurance",
			text: "Medical Indemnity Insurance",
			'data-wa': `Click: Medical Indemnity Insurance`
		},
	]
}]

export const findHealthInsuranceTemplate = `<div class="container py-lg">
	<div class="row">
		${_findHealthInsuranceData.map((category) => {
		return `
		<div class="col">
			<h3 class="h5 text-green mb-sm">${category.name}</h3>
			<ul class="list-unstyled">
				${category.links.map((link, index) => `
				<li>
					<a class="d-inline-block py-xxs" href=${link.url} style="--link-index: ${index}">${link.text}</a>
				</li>
				`).join('')}
			</ul>
		</div>
		`
		}).join('')}
	</div>
</div>`

const _learnTemplateDataIFPSMB = [{
	name: `Individual & Family`,
	links: [{
			text: `Health Insurance Resource Center`,
			url: `/resources`,
			'data-wa': `Click: Health Insurance Resource Center`
		},
		{
			text: `Affordable Care Act`,
			url: `/resources/affordable-care-act`,
			'data-wa': `Click: Affordable Care Act`
		},
		{
			text: `Frequently Asked Questions`,
			url: `/resources/frequently-asked-questions`,
			'data-wa': `Click: Frequently Asked Questions`
		},
		{
			text: `Vision Insurance`,
			url: `/vision-insurance`,
			'data-wa': `Click: Vision Insurance`
		},
	]
}, {
	name: `Small Business`,
	links: [{
		url: "/small-business-health-insurance/small-business-preparation-checklist",
		text: "Application Checklist",
		'data-wa': `Click: Application Checklist`
	}, {
		url: "https://www.ehealthinsurance.com/resources/small-business",
		text: "Small Business Resource Center",
		'data-wa': `Click: Small Business Resource Center`
	}, {
		url: "/small-business-health-insurance/buyers-guide",
		text: "Guide for Buying Small Business Health Insurance",
		'data-wa': `Click: Guide for Buying Small Business Health Insurance`
	}, {
		url: "/small-business-health-insurance/shop-marketplace",
		text: "SHOP Marketplace Guide",
		'data-wa': `Click: SHOP Marketplace Guide`
	}]
}]

const _learnTemplateDataMedicare = {
	name: `Medicare`,
	links: [{
			url: "https://www.ehealthinsurance.com/medicare/advantage-all/medicare-advantage",
			text: "Medicare Advantage",
			'data-wa': `Click: Medicare Advantage`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/advantage-all/medicare-advantage-plan-costs",
			text: "Medicare Advantage Cost",
			'data-wa': `Click: Medicare Advantage Cost`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/advantage-all/comparing-medicare-advantage-plans",
			text: "Compare Medicare Advantage Plans",
			'data-wa': `Click: Compare Medicare Advantage Plans`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/supplement-all/medicare-advantage-vs-medicare-supplement-plans",
			text: "Medigap vs Medicare Advantage",
			'data-wa': `Click: Medigap vs Medicare Advantage`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/supplement-all/medigap-plans",
			text: "What is Medigap",
			'data-wa': `Click: What is Medigap`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/supplement-all/medicare-supplement-plan-costs",
			text: "Medigap Cost",
			'data-wa': `Click: Medigap Cost`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/supplement-all/medicare-supplement-plans",
			text: "Medicare Supplement Plans",
			'data-wa': `Click: Medicare Supplement Plans`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/supplement-all/compare-medicare-supplement-plans",
			text: "Compare Medicare Supplement Plans",
			'data-wa': `Click: Compare Medicare Supplement Plans`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/supplement-all/medicare-supplement-enrollment",
			text: "Enrolling in Medicare Supplement Plans",
			'data-wa': `Click: Enrolling in Medicare Supplement Plans`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/part-d-all/medicare-part-d-prescription-drug-coverage",
			text: "Medicare Part D",
			'data-wa': `Click: Medicare Part D`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/part-d-all/medicare-part-d-prescription-drug-coverage-costs",
			text: "Medicare Part D Costs",
			'data-wa': `Click: Medicare Part D Costs`
		},
		{
			url: "https://www.ehealthinsurance.com/medicare/part-d-all/comparing-medicare-part-d-coverage",
			text: "Compare Medicare Part D Plans",
			'data-wa': `Click: Compare Medicare Part D Plans`
		},
	]
}

export const learnTemplate = `
<div class="container px-md py-lg">
	<div class="row">
		<div class="col-6">
			${_learnTemplateDataIFPSMB.map((category) => `
				<h3 class="h5 text-green mb-sm${category.name === 'Small Business' ? ' mt-lg' : ''}">${category.name}</h3>
				<ul class="list-unstyled">
					${category.links.map((link, index) => `
						<li>
							<a class="d-inline-block py-xxs" href=${link.url} style="--link-index: ${index}">${link.text}</a>
						</li>
					`).join('')}
				</ul>
			`).join('')}
		</div>
		<div class="col-6">
            <h3 class="h5 text-green mb-sm">${_learnTemplateDataMedicare.name}</h3>
            <ul class="list-unstyled">
                ${_learnTemplateDataMedicare.links.map((link, index) => `
                    <li>
                        <a class="d-inline-block py-xxs" href=${link.url} style="--link-index: ${index}">${link.text}</a>
                    </li>
                `).join('')}
            </ul>
		</div>
	</div>
</div>
`;

const _aboutTemplateData = {
	name: `Company`,
	links: [{
		url: "/",
		text: "Link",
		'data-wa': `Click: Application Checklist`
	}, {
		url: "/",
		text: "Link",
		'data-wa': `Click: Small Business Resource Center`
	}, {
		url: "/",
		text: "Link",
		'data-wa': `Click: Guide for Buying Small Business Health Insurance`
	}, {
		url: "/",
		text: "Link",
		'data-wa': `Click: SHOP Marketplace Guide`
	}]
}

export const aboutTemplate = `
<div class="container px-md py-lg">
	<div class="row">
		<div class="col">
			<h3 class="h5 text-green mb-sm">${_aboutTemplateData.name}</h3>
            <ul class="list-unstyled">
                ${_aboutTemplateData.links.map((link, index) => `
                    <li>
                        <a class="d-inline-block py-xxs" href=${link.url} style="--link-index: ${index}">${link.text}</a>
                    </li>
                `).join('')}
            </ul>
		</div>
	</div>
</div>
`;

export const invocaTemplate = `
<div class="container px-md py-lg text-center">
	<div class="row">
		<div class="col">
			<h3 class="h5 mb-sm">Representatives Available</h3>
			<p class="my-md">Mon - Fri, 9am - 7pm ET</p>
			<button class="button button--secondary w-100">Start Chat</button>
		</div>
	</div>
</div>
`;

export const mobileTemplate = `
<div class="container py-xxl">
	<div class="mobile-menu-section pb-lg mb-lg border-bottom">
		<h3 class="text-green mb-sm">Your Account</h3>
		<div class="row px-sm px-sm-md">
			<div class="col">
				<a href="/ehi/core/login">Sign In</a>
			</div>
		</div>
	</div>
	<div class="mobile-menu-section">
		<h3 class="text-green mb-sm">Find Health Insurance</h3>
		<div class="row px-sm px-sm-md">
			${_findHealthInsuranceData.map((category) => {
				return `
				<div class="col-md-6 my-base">
					<h3 class="h5 text-black-text mb-sm">${category.name}</h3>
					<ul class="list-unstyled">
						${category.links.map((link, index) => `
						<li>
							<a class="d-inline-block py-xxs" href=${link.url} style="--link-index: ${index}">${link.text}</a>
						</li>
						`).join('')}
					</ul>
				</div>
				`
			}).join('')}
		</div>
	</div>
</div>
`