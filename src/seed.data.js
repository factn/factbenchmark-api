
var seed_data =  {
  delete: true,
  disabled: false,
  params: { provider: 'rest' },
  services: [
    {
      path: 'claims',
      count: 100,
      template: {
		"claim-text": "Student arrested for shouting slogans against BJP in Tamil Nadu",
		"timestamp": "2018-09-04T04:29:00.000Z",
		"attribution": "https://twitter.com/LKC1965",
		"submitted-by": { "href": "agent/faktist16"},
		"created": "2019-01-01T01:23:00.000Z"
      }
    },
    {
      path: 'responses',
      count: 50,
      templates: [
		{
			"ref": { "href": "claim/7dc0051f" },
			"check-worthy": { "importance": 1},
			"submitted-by": { "href": "agent/joef2016"},
			"created": "2019-01-01T01:23:00.000Z"
		},
		{ 
			"ref": { "href": "claim/7dc0051f" },	
			"check-worthy": {
				"importance": 0.3,
				"decline-to-rate": {
					"reason": "not falsifiable - better options exist",
					"support": { "hash": "3d8c26e642e3b" },
					"ref": { "href": "claim/5d81f18d" }
				}
			},
			"submitted-by": { "href": "agent/joef2016" },
			"created": "2019-01-01T01:23:00.000Z"
		},
		{ 
			"ref": { "href": "claim/7dc0051f" },
			"check-worthy": {
				"decline-to-rate": {
					"reason": "not falsifiable - statement of opinion"
				}
			},
			"submitted-by": { "href": "agent/joef2016"},
			"created": "2019-01-01T01:23:00.000Z"
		},
		{ 
			"ref": { "href": "claim/7dc0051f" },	
			"truth-rating": {
				"call": false,
			},
			"submitted-by": { "href": "agent/joef2016"},
			"created": "2019-01-01T01:23:00.000Z"
		}]
	}]
};

module.exports = seed_data;


