import React from 'react';
import { Alert, AlertVariant } from '@patternfly/react-core';
import { useField } from 'formik';
import { DropdownField } from '../../../shared';
import { GIT_PROVIDER_ANNOTATION_VALUE } from '../../../utils/component-utils';

type GitProviderDropdownProps = Omit<
  React.ComponentProps<typeof DropdownField>,
  'items' | 'label' | 'placeholder'
>;

export const GitProviderDropdown: React.FC<React.PropsWithChildren<GitProviderDropdownProps>> = (
  props,
) => {
  const [{ value }, { error }, { setValue }] = useField<string>(props.name);

  const dropdownItems = [
    { key: GIT_PROVIDER_ANNOTATION_VALUE.GITHUB, value: GIT_PROVIDER_ANNOTATION_VALUE.GITHUB },
    { key: GIT_PROVIDER_ANNOTATION_VALUE.GITLAB, value: GIT_PROVIDER_ANNOTATION_VALUE.GITLAB },
  ];

  return (
    <div className="pf-v5-u-mb-md">
      <DropdownField
        {...props}
        required
        label="Git provider annotation"
        placeholder={'Select git provider'}
        value={value}
        items={dropdownItems}
        onChange={(provider: string) => setValue(provider)}
      />
      {error && (
        <Alert isInline variant={AlertVariant.danger} title="Provider must be GitLab or GitHub" />
      )}
    </div>
  );
};
