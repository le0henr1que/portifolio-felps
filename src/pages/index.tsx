import CardProject from "../components/Card-project";
import GroupButton from "../components/Group-button";

export default function Home() {
  return (
    <div className="w-full gap-[20px] flex items-center justify-center p-5 flex-col">
      <div className="flex items-center justify-center gap-[20px] w-full">
        <button className="btn-secondary small">Secondary Small</button>
        <button className="btn-secondary large">Secondary large</button>
        <button className="btn-secondary large" disabled>
          Secondary disabled
        </button>
        <button className="btn-secondary-outlined large" disabled>
          Secondary outlined disabled
        </button>
        <button className="btn-secondary-outlined large">
          Secondary outlined
        </button>
      </div>
      <div className="flex items-center justify-center gap-[20px] w-full">
        <button className="btn-secondary small">primary Small</button>
        <button className="btn-primary large">primary large</button>
        <button className="btn-primary large" disabled>
          primary disabled
        </button>
        <button className="btn-primary-outlined large" disabled>
          primary outlined disabled
        </button>
        <button className="btn-primary-outlined large">primary outlined</button>
      </div>

      <div className="w-full flex items-center justify-center">
        <GroupButton.Root>
          <GroupButton.Group
            tabs={[
              {
                value: "tab1",
                label: "Tab 1",
                content: (
                  <div>
                    <button className="btn-text">
                      Secondary outlined disabled
                    </button>
                  </div>
                ),
              },
              {
                value: "tab2",
                label: "Tab 2",
                content: (
                  <div>
                    <CardProject
                      name="Originar - Mobile App"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum arcu nec augue tincidunt, et dapibus justo porta. Duis in justo nec odio convallis congue. Integer vitae justo auctor, varius dolor nec."
                      banner="whaterver"
                    />
                  </div>
                ),
              },
              {
                value: "tab3",
                label: "Tab 3",
                content: <div>Tab 3 content</div>,
              },
              {
                value: "tab6",
                label: "Tab 6",
                content: <div>Tab 3 content</div>,
              },
            ]}
          />
        </GroupButton.Root>
      </div>
    </div>
  );
}
