```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/termsandconditions">
        TermsAndConditions
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- Appears directly before the page footer, with the exception of call-to-action callback cards

```jsx
<TermsAndConditions
  copy="en"
  indexedContent={[
    'A $35 connection fee applies per line. Fee includes a SIM card and access to a TELUS team member to process your activation or renewal along with other exclusive TELUS services. You can offset your connection fee by up to $5 by signing up for pre-authorized payments. Not stackable with any other pre-authorized payments offers. For more details, please go to telus.com/mobilityfees. A one-time Connection Fee will be charged per subscriber on all activations and renewals. The fee is $35 for smartphones, smartwatches, tablets, Smart Hubs, Drive +, Wireless Home Phone, and Internet keys. The fee will be automatically billed and will appear on the first or next invoice. A $35 credit will appear for all Fleet, Business Connect and HSIA wireless back up activations and renewals on the first bill.',
    'Only available on a TELUS Easy Share Platinum plan starting at $110/mo. Offer applies to new TELUS Business customer activations. Not available for Consumer accounts. Ask a TELUS representative for other eligibility requirements. Offer available for a limited time and is subject to change without notice.',
    'Subject to approved credit. Not available to customers on the credit limit program. Returned device must be in good working condition or you will be responsible for the difference between the Bring-it-Back program amount and the lower trade-in value for a device that is not in good working condition Trade-in standards published at the time a device is returned will appy. Applicable sales taxes are calculated at time of purchase on the full purchase price. You will not be charged tax on the Bring-It-Back Program Amount if you chose to keep your device and pay back the Bring-It-Back Program Amount at, or before, the end of the 24 month term. Bring-It-Back program is only available while you subscribe to mobility service. If mobility service is cancelled before the end of the term, the Bring-It-Back Program Amount will be charged to your TELUS bill.',
    'Only available on a TELUS Easy Share Premium Plus plan starting at $90/mo. Offer applies to new TELUS Business customer activations. Not available for Consumer accounts. Ask a TELUS representative for other eligibility requirements. Offer available for a limited time and is subject to change without notice.',
    'Only available on a TELUS Easy Share Premium plan starting at $80/mo. Offer applies to new TELUS Business customer activations. Not available for Consumer accounts. Ask a TELUS representative for other eligibility requirements. Offer available for a limited time and is subject to change without notice.',
    'Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $70/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice.',
    'Only available on a TELUS Bring Your Own Device plan starting at $70/mo. Offer applies to new TELUS Business customer activations. Not available for Consumer accounts. Ask a TELUS representative for other eligibility requirements. Offer available for a limited time and is subject to change without notice.',
  ]}
  nonIndexedContent={[
    'Pricing does not include applicable taxes or pay-per-use charges.',
    'Certain conditions may apply. TELUS reserves ther ight to modify prices and eligible rate plans with this offer at any time without advance notice.',
  ]}
/>
```
