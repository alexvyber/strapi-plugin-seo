import React, { useState } from 'react';

import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '@strapi/design-system/ModalLayout';

import { Button } from '@strapi/design-system/Button';
import { Typography } from '@strapi/design-system/Typography';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../utils';

import SeoTabs from '../Tabs';

import _ from 'lodash';

import Search from '@strapi/icons/Search';

const SeoChecker = () => {
  const { formatMessage } = useIntl();
  const [isVisible, setIsVisible] = useState(false);
  const { allLayoutData, modifiedData } = useCMEditViewDataManager();

  const { contentType, components } = allLayoutData;

  if (modifiedData.hasOwnProperty('seo') && _.get(modifiedData, 'seo', null)) {
    return (
      <>
        <Button
          variant="secondary"
          startIcon={<Search />}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          SEO
        </Button>
        {isVisible && (
          <ModalLayout
            onClose={() => setIsVisible((prev) => !prev)}
            labelledBy="title"
          >
            <ModalHeader>
              <Typography
                fontWeight="bold"
                textColor="neutral800"
                as="h2"
                id="title"
              >
                SEO Plugin
              </Typography>
            </ModalHeader>
            <ModalBody>
              <SeoTabs
                modifiedData={modifiedData}
                components={components}
                contentType={contentType}
              />
            </ModalBody>
            <ModalFooter
              startActions={
                <Button
                  onClick={() => setIsVisible((prev) => !prev)}
                  variant="tertiary"
                >
                  {formatMessage({
                    id: getTrad('Modal.cancel'),
                    defaultMessage: 'Cancel',
                  })}
                </Button>
              }
            />
          </ModalLayout>
        )}
      </>
    );
  }
  return <></>;
};

export default SeoChecker;