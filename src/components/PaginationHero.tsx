import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationHero = () => {
  return (
    <div className="text-[#DB0002]">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">⚬</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">⚬</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">⚬</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationHero;
