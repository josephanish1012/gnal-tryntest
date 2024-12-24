// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';

export default function Breadcrumbs() {
    const location = useLocation();
    const navigate = useNavigate();
    let items: BreadcrumbGroupProps.Item[] = [];

    const baseBreadcrumb = [
        {
            text: 'Home',
            href: '/',
        },
    ];

    const pathName = location.pathname;

    if (pathName === '/settings') {
        items = [
            ...baseBreadcrumb,
            {
                text: 'Settings',
                href: '/settings',
            },
        ];
    } else if (pathName === '/conversations') {
        items = [
            ...baseBreadcrumb,
            {
                text: 'Conversations',
                href: '/conversations',
            },
        ];
    } else if (pathName.startsWith('/conversation/')) {
        const conversationName = pathName.split('/')[2];
        items = [
            ...baseBreadcrumb,
            {
                text: 'Conversations',
                href: '/conversations',
            },
            {
                text: conversationName,
                href: `/conversations/${conversationName}`,
            },
        ];
    } else if (pathName === '/new') {
        items = [
            ...baseBreadcrumb,
            {
                text: 'New Conversation',
                href: '/new',
            },
        ];
    } else if (pathName === '/generate') {
        items = [
            ...baseBreadcrumb,
            {
                text: 'Generate Audio',
                href: '/generate',
            },
        ];
    } else if (pathName === '/PatientInsights') {
        items = [
            ...baseBreadcrumb,
            {
                text: 'Patient Insights',
                href: '/PatientInsights',
            },
        ];
    }

    return (
        <BreadcrumbGroup
            items={items}
            onFollow={(event) => {
                event.preventDefault();
                navigate(event.detail.href, { relative: 'route' });
            }}
        />
    );
}
