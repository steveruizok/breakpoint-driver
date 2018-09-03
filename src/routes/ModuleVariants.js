import React, { Component } from "react";
import {
  ModuleA,
  ModuleB,
  ModuleC,
  ModuleD,
  ModuleE
} from "../components/modules";

class ModuleVariants extends Component {
  render() {
    return [
      <div key="ModuleA">
        <h2>Module A</h2>
        <ModuleA>
          {[
            "Primary",
            "Secondary",
            "Tertiary 1",
            "Tertiary 2",
            "Tertiary 3",
            "Tertiary 4",
            "Tertiary 5",
            "Tertiary 6"
          ]}
        </ModuleA>
      </div>,

      <div key="ModuleB">
        <h2>Module B</h2>
        <ModuleB>
          {[
            "Primary",
            "Secondary",
            "Tertiary 1",
            "Tertiary 2",
            "Tertiary 3",
            "Tertiary 4",
            "Tertiary 5",
            "Tertiary 6"
          ]}
        </ModuleB>
      </div>,

      <div key="ModuleC">
        <h2>Module C</h2>
        <ModuleC className="hello-world">
          {[
            "Primary",
            "Secondary",
            "Tertiary 1",
            "Tertiary 2",
            "Tertiary 3",
            "Tertiary 4",
            "Tertiary 5",
            "Tertiary 6",
            "Tertiary 7",
            "Tertiary 8",
            "Tertiary 9",
            "Tertiary 10",
            "Tertiary 11",
            "Tertiary 12"
          ]}
        </ModuleC>
      </div>,

      <div key="ModuleD">
        <h2>Module D</h2>
        <ModuleD className="hello-world">
          {[
            "It is for us, the living, rather to be dedicated here to the unfinished work which they have, thus far, so nobly carried on. It is rather for us to be here dedicated to the great task remaining before us that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion that we here highly resolve that these dead shall not have died in vain; that this nation shall have a new birth of freedom; and that this government of the people, by the people, for the people, shall not perish from the earth."
          ]}
        </ModuleD>
        <ModuleE className="hello-world">{["Advertisement"]}</ModuleE>

        <ModuleD className="hello-world">
          {[
						<div>
						<p>Portsmouth Naval Base has existed since 1194, and our nation’s history is all around us. This is the place where the industrial revolution started, with the first steam production line anywhere in the world and significantly earlier than the much vaunted Ford Model T production line. The Georgian architecture which surrounds us is some of the finest in the country.  At one time, it was the largest industrial centre in Europe and today the world’s largest conventional aircraft carrier is here, the very mark of this nation’s 21st Century industrial capability, and our continuing ambition. </p>
						<p>And yet, what stands at the very heart of this, the oldest naval base in the world, in the second oldest dry dock in the world, is a wooden ship. This ship. </p>
						<p>So here we are tonight, aboard this icon of our nation’s maritime history, to commemorate the 212th anniversary of the Battle of Trafalgar and with it the life and death of Britain’s greatest naval hero: Vice Admiral Horatio The Lord Nelson, 1st Viscount Nelson, 1st Duke of Bronte, Knight of the Bath and Vice Admiral of the White.</p>
						<p>I must also say that to dine in such wonderful company would have been right up Nelson’s street and, of course, we are joined by a direct descendant of a previous Admiral who dined in this very cabin, the First Earl Howe, whose flag flew from the HMS Victory’s mainmast in 1782 and again in 1790.</p>
						</div>
          ]}
        </ModuleD>
      </div>
    ];
  }
}

export default ModuleVariants;
