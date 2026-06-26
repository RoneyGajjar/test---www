
export const MOCK_DB: Record<string, any> = {
    'zendesk-mock': {
        name: 'Jira',
        developer: 'DevRev.',
        shortDescription: 'Track and manage your work and projects.',
        categories: ['SUPPORT', 'IMPORT'],
        iconUrl: '/logos/icon.png',
        heroMockupUrl: '/container.jpg',
        bodyContent: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'The Jira AirSync Snap-in enables you to keep track of your work no matter where it happens. You can migrate issues and users for an easier onboarding experience or sync Jira issues so you can leverage both systems. It provides various options for importing and synchronizing issues and users from Jira. Whether you need to import one project or multiple, choose between one-way sync from Jira to DevRev or bi-directional to keep both systems in sync.' }]
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Features' }]
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Recipe mapping' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Recipe mapping ensures no critical Jira fields, even custom ones, are overlooked. You can select what to migrate and let our recommendations guide you on how to optimize the migration process for your Jira projects.' }]
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Import' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'The import feature allows for a one-time bulk migration of a Jira project. It utilizes recipe mapping, ensuring you bring over only whats essential and leave unnecessary data behind.' }]
            }, {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Sync to DevRev' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Using the sync to DevRev functionality, you can re-synchronize a prior import to incorporate any new issues or modifications to previously imported items from a Jira project.' }]
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Sync to Jira' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'The sync to Jira functionality enables you to update modifications made in DevRev to Jira projects that were previously imported. Additionally, you can synchronize new work items created in DevRev to Jira.' }]
            }
        ]
    }
};